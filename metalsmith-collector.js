'use strict';

var collections = require('metalsmith-collections');
var Matcher = require('minimatch').Minimatch;
var path = require('path');

module.exports = collector;

function collector(options) {
  options = normalize(options);

  return function(files, metalsmith, done){
    var collectionsObj = {};

    var matcher = new Matcher(options.pattern);

    Object.keys(files).forEach(function(filename){
      var d = dirSplit(filename);
      var dir = d[0];
      var file = files[filename];
      var subpath = d[1];

      if(!file._collector_ignore) {
        if (matcher.match(subpath)) {
          var pattern = dir === 'root' ? options.pattern : dir + '/' + options.pattern;
          var name = dir.replace(/-/g, '_');
          collectionsObj[name] = Object.assign({'pattern': pattern}, options.default);
        }
        else {
          var subDir = subpath.split(path.sep)[0];
          var subSubpath = subpath.split(path.sep)[1];
          if (subDir === 'entry') {
            var pattern = dir + '/' + subDir + "/" + options.pattern;
            var name = "catalog";
            collectionsObj[name] = Object.assign({'pattern': pattern}, options.default);
          }
        }
      }

    });
    return collections(collectionsObj)(files, metalsmith, done);
  };
}


function dirSplit(filename) {
  var filepath = path.normalize(filename);
  var split = filename.split(path.sep);

  if (split.length === 1) {
    return ['root', split[0]];
  }

  return [split[0], split.slice(1).join(path.sep)];
}


function normalize(options) {
  options = "string" === typeof options ? {pattern: options} : options || {};
  options.ignore = options.ignore || [];
  options.default = {
    sortBy: 'date',
    reverse: true
  };
  options.pattern = options.pattern || '*';

  return options;
}
