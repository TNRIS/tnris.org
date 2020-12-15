'use strict';

var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var glob = require('glob');
var webpack = require('webpack');


function generate(env) {
  var staticFiles = glob.sync(
    'static/**/*', {
      mark: true
    }
  ).filter(function (path) {
    return path.slice(-1) !== '/' && path.indexOf('/js/') < 0;
  });

  var processedHTML = glob.sync(
    '.tmp/**/*.html', {
      mark: true
    }
  );

  var outputPath = process.env.NODE_ENV === 'development' ? path.resolve(__dirname, '.tmp') : path.resolve(__dirname, '.dist');

  var config = {
    mode: process.env.NODE_ENV,
    entry: {
      'contact-forms': [path.resolve(__dirname, 'static/js/contact-forms/app.js')],
      'datahub': [path.resolve(__dirname, 'static/js/datahub.js')],
      'forum': [path.resolve(__dirname, 'static/js/forum.js')],
      'forum_training': [path.resolve(__dirname, 'static/js/forum_training.js')],
      'gio_calendar_next_cm': [path.resolve(__dirname, 'static/js/gio_calendar_next_cm.js')],
      'gio_calendar_quad': [path.resolve(__dirname, 'static/js/gio_calendar_quad.js')],
      'gio_notes_and_slides': [path.resolve(__dirname, 'static/js/gio_notes_and_slides.js')],
      'latest_stratmap': [path.resolve(__dirname, 'static/js/latest_stratmap.js')],
      'maps': [path.resolve(__dirname, 'static/js/maps.js')],
      'mapserver': [path.resolve(__dirname, 'static/js/mapserver.js')],
      'processed': processedHTML,
      'static': staticFiles,
      'site': [path.resolve(__dirname, 'static/js/site.js')],
      'training': [path.resolve(__dirname, 'static/js/training.js')],
      'training_partial': [path.resolve(__dirname, 'static/js/training_partial.js')],
      'webfontloader': ['file-loader?name=webfontloader.js!webfontloader'],
      'xdomain': ['file-loader?name=xdomain.js!xdomain'],
    },
    output: {
      path: outputPath,
      filename: '[name].bundle.js'
    },
    resolve: {
      modules: [
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, '.tmp'),
      ],
      alias: {
        'static': './static',
        '.tmp': './.tmp',
      }
    },
    module: {
      noParse: /node_modules\/clipboard\/dist\/clipboard.min.js/,
      rules: [
        {
          test: /LICENSE/i,
          loader: 'file-loader?name=[path][name]'
        },
        {
          test: /\/static\/(?!js)/i,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
          test: /\/static\/js/i,
          loader: 'ng-annotate-loader'
        },
        {
          test: /\/node_modules\/.+\.svg/i,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
          test: /\/.tmp\/.+\.html/i,
          loader: 'file-loader?context=.tmp/&name=[path][name].[ext]',
        },
        {
          test: /\/partials\/.+\.html/i,
          loader: 'file-loader?name=[path][name].[ext]'
        },
        {
          test: /\.(eot|ttf|woff2?)$/i,
          loader: 'file-loader',
        },
        {
          test: /\.swf$/i,
          loader: 'file-loader?name=[path][name].[ext]',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                // publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                // publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          jQueryUI: 'jquery-ui',
          'window.jQuery': 'jquery',
          'swfobject': 'swfobject',
      }),
      // DefinePlugin must be last in 'plugins' array
      // for dist-metal gulp task templating
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify(process.env.NODE_ENV),
          "FORUM_YEAR": JSON.stringify("2016"),
          "FORUM_DAY_ONE": JSON.stringify("2016-10-26"),
          "FORUM_DAY_TWO": JSON.stringify("2016-10-27"),
          "FORUM_REGISTRATION_LINK": JSON.stringify("https://events.eply.com/2019GISForumRegistration")
        }
      }),
    ]
  };

  return config;
}

module.exports = generate;
