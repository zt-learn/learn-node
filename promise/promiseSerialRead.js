var fs = require('fs');
var Q = require('q');

function read(url) {
  var defer = Q.defer();
  fs.readFile(url, function(err, data) {
    if (err) {
      defer.reject(err)
    } else {
      defer.resolve(data);
    }
  });
  return defer.promise;
}

read('file/1.txt')
  .then(function(data) {
    console.log(data.toString());
  })
  .catch(function(err) {
    console.log(err);
  })
