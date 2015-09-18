/**
 * Created by zhentaoo on 15/9/18.
 */

var fs = require('fs'),
  Q = require('q'),
  colors = require('colors'),
  file = 'file/1.txt';

var func1 = function (fileName, callback) {
  var deferred = Q.defer();
  fs.readFile(fileName, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise.nodeify(callback);
};

var func2 = function (fileName,callback) {
  var deferred = Q.defer();
  fs.readFile(fileName, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise.nodeify(callback);
};

Q.all([
  func1('file/1.txt'),func2('file/2.txt')
]).spread(function () {
  console.log(arguments)
});