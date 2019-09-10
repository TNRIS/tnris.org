'use strict';

var path = require('path');
var moment = require('moment');

module.exports = autodate;

function autodate(options) {
  options = normalize(options);

  return function(files, metalsmith, done){
    setImmediate(done);

    Object.keys(files).forEach(function(filepath){
      var file = files[filepath];
      var dirname = path.dirname(filepath);
      var filename = path.basename(file.preserved);
      var withoutDate = filename;

      if (filename.length > options.format.length) {
        var test = filename.substr(0, options.format.length);
        var m = moment(test, options.format, true);

        if (m.isValid()) {
          if (file.date && stringify(file.date, options.format) !== stringify(m, options.format)) {
            throw new Error("Date-named file '" + filepath + "' has a non-matching date attribute: " + stringify(file.date, options.format));
          }

          file.date = m.toDate();

          withoutDate = filename.substr(options.format.length);
          if (withoutDate.match(/^[-.]/)) {
            withoutDate = withoutDate.substr(1);
          }
        }
      }
      file.withoutDate = withoutDate;
    });
  };
}


function normalize(options){
  if ('string' === typeof options) {
    options = { date: options };
  }
  options = options || {};
  options.format = options.format || 'YYYY-MM-DD';
  return options;
}


function stringify(date, format) {
  return moment(date).utc().format(format);
}
