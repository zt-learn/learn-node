var Promise = require('bluebird');
var fs = require('fs');

fs.readFile('info2.txt', function (err, file) {
   console.log(file.toString());
  //  console.log('start 2 read file');
});
