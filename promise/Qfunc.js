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

var func2 = function (data) {
  console.log(data.toString());
  var deferred = Q.defer();
  fs.readFile('file/2.txt', function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise.nodeify();
};

var func3= function (data) {
  console.log(data.toString());
};

func1('file/1.txt')
  .then(func2)
  .then(func3)
  .catch(function (err) {
    console.log('catch:'+err);
  });
