var Q = require('q');
var fs = require('fs');
Q.ninvoke(fs, 'readFile', 'file/1.txt')
  .then(function (data) {
    console.log(data);
  });
// fs.readFile('file/1.txt').then(function (data) {
//   console.log(data);
// })
