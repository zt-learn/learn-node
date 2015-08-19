var fs = require('fs');
var Q = require('q');

function read(url) {
    return function () {
        var defer = Q.defer();
        fs.readFile(url, function (err, data) {
            console.log(data.toString());
            defer.resolve();
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

read('file/1.txt')()
    .then(read('file/2.txt'))
    .then(test())
    .then(read('file/3.txt'));