var fs = require('fs');
var Q = require('q');

function read(url) {
    return function () {
        var defer = Q.defer();
        fs.readFile(url, function (err, data) {
            if(err){
              console.log(err);
              defer.reject(err)
            }else{
              console.log(data.toString());
              defer.resolve(err);
            }
        });
        return defer.promise;
    }
}

function test() {
    return function () {
        var defer = Q.defer();

        console.log('test');
        defer.resolve();

        return defer.promise;
    }
}

// console.log(read('file/1.txt'));

read('file/1.txt')()
    .then(read('file/2.txt'))
    .then(test())
    .then(read('file/3.txt'));
