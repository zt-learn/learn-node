/**
 * Created by zhentaoo on 15/11/17.
 */
var Q = require('q');
var fs = require('fs');

var readFile = function (path) {
  var deferred = Q.defer();
  fs.readFile(path, function (err, result) {
    debugger
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(result);
    }
  });

  return deferred.promise;
};

Q.async(function *() {
  var data = parseInt(yield readFile('test1.txt'));

  var a = data + 20;

  var data2 = parseInt(yield readFile('test2.txt'));

  var b = data + data2;

  console.log(a, b);
})();