'use strict';

const _ = require('lodash');
const autodate = require('./metalsmith-autodate');
const beautify = require('js-beautify');
const beautifyHtml = beautify.html;
const clog = require('clog');
const collector = require('./metalsmith-collector');
const debug = require('debug')('tnris-site');
const del = require('del');
const each = require('metalsmith-each');
const fs = require('fs');
const glob = require('glob');
const gulp = require('gulp');
const gulp_front_matter = require('gulp-front-matter');
const gulpsmith = require('gulpsmith');
const jsdom = require('jsdom');
const markdown = require('metalsmith-markdown');
const marked = require('marked');
const metadata = require('metalsmith-metadata');
const moment = require('moment');
const msInPlace = require('metalsmith-in-place');
const msLayouts = require('metalsmith-layouts');
const paginate = require('metalsmith-paginate');
const path = require('path');
const permalinks = require('metalsmith-permalinks');
const sitemap = require('metalsmith-sitemap');
const tcpPortUsed = require('tcp-port-used');
const trim = require('lodash.trim');
const vinylPaths = require('vinyl-paths');
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const winston = require('winston');
const crossref = require('./metalsmith-crossref');

// ***************************
// SETUP VARIABLES
// ***************************

const generateWebpackConfig = require('./generate-webpack-config');

const production = false;
// try to use localhost port 8000 to serve dev app build.
// check if available: if not (example: in use by api.tnris.org),
// then serve from 8020 instead...
let devServerPort = 8000;
tcpPortUsed.check(8000, 'localhost')
.then(function(inUse) {
  if (inUse) {
    devServerPort = 8020;
    clog.info('Port 8000 in use! App will serve from port 8020 instead...');
  }
}, function(err) {
  clog.info('Error detecting port availability.');
});

const dirs = {
  dist: './.dist',
  content: './content',
  scss: './scss',
  static: 'static',
  tmp: './.tmp',
  templates: './templates'
};

dirs.markdown = path.join(dirs.content, 'markdown');

const paths = {
  content: dirs.content + '/**/*',
  javascript: dirs.static + '/**/*.js',
  markdown: dirs.markdown + '/**/*.md',
  scss: dirs.scss + '/**/*.scss',
  static: dirs.static + '/**/*',
  templates: dirs.templates + '/**/*',
};

winston.remove(winston.transports.Console);
winston.add(new winston.transports.Console({ colorize: true }));
winston.add(new winston.transports.File({
  filename: path.join(dirs.dist, '.build_errors'),
  json: false
}));

// global crossref obj. populated by metalsmith build for use in validateLink filter
let crossrefObj;

// ***************************
// NUNJUCKS FILTERS
// ***************************

// nunjucks filter for validating m.link macro'd links
function validateLink(str, validatorFilename) {
  // if no value supplied in m.link, throw error
  if (!str) {
    errors.breaking("Invalid link-- No Value: " + str + ", File: " + validatorFilename);
    return '#';
  }

  const re = /^(.*:.*|\/\/|\/|#)/;
  // use regex to check if m.link macro links have the appropriate
  // starting *:* or /* characters (http:, https:, mailto:, tel:, /, #, etc...)
  if (!str.match(re)) {
    errors.breaking("Invalid link-- Bad starting characters: " + str + ", File: " + validatorFilename);
    return '#';
  }

  const reRoot = /^(\/)/;
  // if internal root link starting with "/" & link text not in
  // crossrefObj, throw error. all internal site links should be in crossrefObj
  if (str.match(reRoot) && !crossrefObj.includes(str.split('#')[0])) {
    errors.breaking("Invalid link-- Not in crossrefObj: " + str + ", File: " + validatorFilename);
    return '#';
  }

  return str;
}

// nunjucks filter for templating in the "multi" form macro
function checkIfArray(obj) {
  return Array.isArray(obj);
}

// nunjucks filter for templating a pretty date "Month Date, Year"
function prettyDate(date) {
  return moment(date).format('MMMM D, Y');
}

// ***************************
// METALSMITH UTILITY FUNCTIONS & VARIABLES
// ***************************

// markdown options object for converting .md into pages within metalsmith-markdown
var markedOptions = {
  renderer: (function () {
    var renderer = new marked.Renderer();
    var re = /^(.*:.*|\/\/|\/|#)/;

    function macroifyLink (originalFunc) {
      return function (href, title, text) {
        // use regex to check if href's created by metalsmith-markdown have
        // the appropriate starting *:* or /*
        // this does not check html anchor href's in the .md files.
        // only [text](link) formatted links
        if (!href.match(re)) {
          errors.breaking("Invalid markdown link, doesn't start with 'mailto:', 'http:', 'https:', or root relative '/': " + href);
        }
        return originalFunc.apply(renderer, [href, title, text]);
      };
    }

    renderer.link = macroifyLink(renderer.link);
    renderer.image = macroifyLink(renderer.image);

    return renderer;
  }()),
  smartypants: false
};

var errors = function () {
  var count = 0;
  return {
    breaking: function log (message) {
      winston.log('error', message);
      this.count++;
    },
    count: count
  }
}();

// ***************************
// SHARED GULP TASKS
// ***************************

// main build task uses metalsmith to compile and nunjucks to template site files
gulp.task('dist-metal', function () {
  // start with sourcing/loading markdown files from directory
  return gulp.src([
    paths.markdown
  ])
    // recognize frontmatter in .md files
    .pipe(gulp_front_matter()).on("data", function(file) {
        _.assign(file, file.frontMatter);
        delete file.frontMatter;
      })
    .pipe(
      // // create metalsmith from gulpsmith
      gulpsmith()
        .use(metadata())
        // add filename and preserved properties for links in macros
        .use(each(function(file, filename) {
          file.filename = filename;
          file.preserved = filename.slice(0, -1 * path.extname(filename).length);
          file.id = file.preserved.replace(/\//g, '-');
          if (file.id[0].match(/\d/)) {
            file.id = '_' + file.id;
          }
          file.FORUM_REGISTRATION_LINK = JSON.parse(generateWebpackConfig().plugins[generateWebpackConfig().plugins.length-1].definitions['process.env'].FORUM_REGISTRATION_LINK);
        }))
        // format dates
        .use(autodate('YYYY-MM-DD'))
        // create metalsmith collections for directory structures
        .use(collector({
          pattern: '*.md'
        }))
        // paginate the news articles for use as "/news-archive"
        .use(paginate({
          perPage: 10,
          path: 'news'
        }))
        .use(each(function(file) {
          // append list of random images to use in 404
          if (file.filename == '404.md') {
            file.contents = new Buffer.from(
              file.contents + `<script>
                                var a = [
                                  "past_gis@2x.jpg",
                                  "ryan.jpg",
                                  "lauren.jpg",
                                  "joey.jpg",
                                  "jason.jpg",
                                  "erik.jpg",
                                  "david.jpg",
                                  "adam.jpg",
                                  "felicia.jpg",
                                  "gayla.jpg",
                                  "miguel.jpg",
                                  "patricia.jpg",
                                  "richard.jpg",
                                  "richard_1987.jpg",
                                  "giscat.jpg",
                                  "henry.jpg"
                                ];
                                var i =a[Math.floor(Math.random()*a.length)];
                                document.getElementById("fourohfour").src="https://cdn.tnris.org/images/"+i;
                              </script>`
            );
          }
        }))
        // process .md files into HTML
        .use(markdown(markedOptions))
        // identify tail part of file path for permalinking
        .use(each(function(file) {
          file.urlEnd = file.withoutDate || file.preserved;
        }))
        // nest files based on metalsmith collections. a.k.a. subdirectory
        // the news articles by date in filename
        .use(permalinks({
          pattern: ':collection/:date/:urlEnd',
          date: 'YYYY-MM-DD'
        }))
        .use(function (files, metalsmith, done) {
          Object.keys(files).forEach(function(f){
            // iterate files and remove the index.html filename from 'preserved' links
            if (f !== files[f].preserved) {
              files[f].preserved = f.replace('/index.html', '');
            }
            // add prefix slash to paths so links are based on root
            // instead of relative
            if (files[f].preserved.charAt(0) !== "/") {
              files[f].preserved = "/" + files[f].preserved;
            }
            // if last page in paginated files, set 'next' undefined so it
            // doesn't auto set as the update.md filename
            const splitPath = files[f].path.split('-');
            if (files[f].pagination &&
                splitPath[splitPath.length-1] === files[f].pagination.total.toString()) {
              files[f].pagination.next = undefined;
            }
          });
          done();
        })
        // build crossref object for link referencing and validation
        .use(crossref({
          includeDirs: {
            'static/documents': 'static/documents',
            'static/images': 'static/images'
          }
        }))
        // take the crossref object and update global variable
        // for use in link macro filter: validateLink
        .use(function (files, metalsmith, done) {
          crossrefObj = metalsmith._metadata.crossref;
          done();
        })
        .use(function (files, metalsmith, done) {
          // combine news, around the state, and gio news into an news-archive stream
          var news_archive = metalsmith._metadata.news
            .concat(metalsmith._metadata.geographic_information_office_news)
            .concat(metalsmith._metadata.around_the_state);
          metalsmith._metadata.news_archive = _.sortBy(news_archive, 'date').reverse();
          done();
        })
        .use(function (files, metalsmith, done) {
          // replace file suffix with templating engine so that
          // metalsmith-in-place can template in current context properly
          Object.keys(files).forEach(function(f) {
            var newF = f.replace(".html", ".njk");
            files[newF] = files[f];
            delete files[f];
          });
          done();
        })
        // metalsmith-in-place to template current context/partials
        .use(msInPlace({
          engineOptions: {
            path: path.join(__dirname, "templates"),
            noCache: true,
            filters: {
              checkIfArray: checkIfArray,
              prettyDate: prettyDate
            }
          }
        }))
        // metalsmith-layouts templates content into their final context
        // within their "/templates" layout. this creates the final files
        .use(msLayouts({
          directory: dirs.templates,
          engineOptions: {
            noCache: true,
            filters: {
              checkIfArray: checkIfArray,
              prettyDate: prettyDate
            }
          }
        }))
        .use(function (files, metalsmith, done) {
          // double check final templated pages for valid links in all
          // tags defined in the 'tags' object
          const tags = {
            "a": "href",
            "iframe": "src",
            "img": "src",
            "embed": "src",
            "audio": "src",
            "video": "src"
          };
          Object.keys(files).forEach(function(f) {
            // stringify file contents and create temp dom with it
            const contents = files[f].contents.toString();
            const dom = new jsdom.JSDOM(contents).window.document;
            Object.keys(tags).forEach(function(t){
              const tAttr = tags[t]
              const elements = dom.querySelectorAll(t);
              elements.forEach(function(e){
                validateLink(e[tAttr], f);
              });
            });
          });
          done();
        })
        // beautify HTML to fix quirky indents and spacing from templating
        .use(function (files, metalsmith, done) {
          const beautifyDefaults = {
              indent_size: 1,
              indent_char: "	",
              preserve_newlines: false,
              max_preserve_newlines: 0,
              brace_style: "collapse",
              keep_array_indentation: false,
              keep_function_indentation: false,
              space_before_conditional: true,
              break_chained_methods: false,
              eval_code: false,
              unescape_strings: false,
              wrap_line_length: 160
          };

          Object.keys(files).forEach(function(f) {
            const contents = files[f].contents.toString();
            const beautifulContents = beautifyHtml(contents, beautifyDefaults);
            files[f].contents = new Buffer.from(beautifulContents);
          });
          done();
        })
        // create a sitemap from all the files built from the metalsmith-layouts
        .use(sitemap({
          hostname: 'https://tnris.org',
          output: 'sitemap.xml'
        }))
        // if errors, stop build and report for fixing
        .use(function (files, metalsmith, done) {
          if (errors.count > 0) {
            clog.error("There were " + errors.count + " errors with this build. You'll need to fix them before continuing.");
            process.exit(1);
          } else {
            clog.info('Build is clean! Hurray!');
          }
          done();
        })
      )
      // copy/dump into .tmp folder for webpack serving
    .pipe(gulp.dest(dirs.tmp));
});

// cleanup task deletes .dist and .tmp folders before running build
gulp.task('clean', function() {
  const folders = [];
  if (fs.existsSync(dirs.dist)) {
    folders.push(dirs.dist);
  }
  if (fs.existsSync(dirs.tmp)) {
    folders.push(dirs.tmp);
  }
  if (folders.length > 0) {
    return gulp.src(folders).pipe(vinylPaths(del));
  }
  else {
    return Promise.resolve('no .dist or .tmp folder to delete!');
  }
});

function checkWebpackErrors (err, stats) {
  if (err) {
    errors.breaking(err);
    process.exit(1);
  } else if (stats.hasErrors()) {
    errors.breaking(stats.toJson().errors);
    process.exit(1);
  }
}

// ***************************
// DEV BUILD GULP TASKS
// ***************************

gulp.task('watch', gulp.series(function watching_content_and_templates (done) {
  gulp.watch(paths.content, gulp.series('dist-metal'));
  gulp.watch(paths.templates, gulp.series('dist-metal'));
  done();
}));

gulp.task('webpack-dev-server', gulp.series('dist-metal', function start_server (callback) {
  process.env.NODE_ENV = 'development';

  var devWebpackConfig = generateWebpackConfig();
  devWebpackConfig.devtool = "eval";

  Object.keys(devWebpackConfig.entry).forEach(function (key) {
    devWebpackConfig.entry[key].unshift('webpack-dev-server/client?http://localhost:' + devServerPort);
  });

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(devWebpackConfig), {
    contentBase: devWebpackConfig.output.path,
    watchContentBase: true,
    publicPath: '/'
  }).listen(devServerPort, "localhost", function(err) {
    if(err) {
      errors.breaking(err);
      throw new gutil.PluginError("webpack-dev-server", err)
    };
    clog.info("webpack dev server started: http://localhost:" + devServerPort + "/");
  });
}));

gulp.task('dev', gulp.parallel('watch', 'webpack-dev-server'));

// ***************************
// PROD BUILD GULP TASKS
// ***************************

gulp.task('webpack-production', gulp.series('dist-metal', function pack_prod_files (callback) {
  process.env.NODE_ENV = 'production';

  var prodWebpackConfig = generateWebpackConfig();

  // commented out until we determine if we need any prod plugins
  // prodWebpackConfig.plugins = prodWebpackConfig.plugins.concat();

  webpack(prodWebpackConfig, function(err, stats) {
    checkWebpackErrors(err, stats);
    callback();
  });

  // copy sitemap from .tmp to .dist
  var sitemap_file = path.join(dirs.tmp, 'sitemap.xml');
  gulp.src(sitemap_file).pipe(gulp.dest(dirs.dist));
}));

// copy static files into .dist folder for prod
gulp.task('static-to-root', gulp.series('webpack-production', function copy_to_dist_folder () {
  var files = glob.sync(path.join(dirs.dist, 'static/*'), {nodir: true});

  return gulp.src(files)
    .pipe(gulp.dest(dirs.dist));
}));

gulp.task('dist', gulp.series('static-to-root'));
