var Q = require('q');
var fs = require('fs');
var filePromise = function (fileName) {
  var deferred = Q.defer();
  fs.readFile(fileName, function (err, data) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(data);
    }
  });
  return deferred.promise;
};
/*
console.log('1:', filePromise('file/1.txt'));


console.log(
  '2:',
  filePromise('file/1.txt')
  .then(function (data) {
    console.log('2 success:', data);
  })
);

console.log(
  '3:',
  filePromise('sdfs')
  .then(function (data) {
    console.log('3 success:', data);
  })
  .catch(function (err) {
    console.log('3 err:', err);
  })
);
*/

Q.async(function* () {
  var a = yield filePromise('file/1.txt');
  var b = yield filePromise('file/2.txt');
  var c = yield filePromise('file/3.txt');
  console.log(a.toString(), b.toString(), c.toString());

  fs.readFile('file/4.txt', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  fs.readFile('file/1.txt', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });


})()
