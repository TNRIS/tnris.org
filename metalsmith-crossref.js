'use strict';

var glob = require('glob');
var _ = require('lodash');

module.exports = crossref;

function crossref(options) {
  return function(files, metalsmith, done){
    options = normalize(options);

    var crossref = [];
    // append all input 'options' files to crossref list.
    if (options.includeDirs) {
      _.forOwn(options.includeDirs, function (path, dir) {
        var filenames = glob.sync(dir + "/**/*", {nodir: true});
        var re = new RegExp("^" + dir);
        filenames.map(function (filename) {
          crossref.push(filename.replace(re, "/" + path));
        });
      });
    }

    // iterate all files scooped up for processing by metalsmith
    // add each files' link path to crossref list
    Object.keys(files).forEach(function(filename){
      var file = files[filename];
      var value = "/" + file.path;
      if (filename === 'index.html') {
        value = '/';
      }
      crossref.push(value);
    });

    // add crossref list to metalsmith obj so it can be accessed in the
    // main gulpfile and passed to the nunucks filter for validating links
    metalsmith._metadata.crossref = crossref;
    done();
  };
}

function normalize(options) {
  var normalized = _.cloneDeep(options);
  normalized.include = normalized.include || {};
  normalized.includeDirs = normalized.includeDirs || [];
  return normalized;
}
