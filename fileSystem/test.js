/**
 * Created by leo on 2015/5/4.
 */
var fs = require('fs');

fs.readFile('info2.txt', function (err, file) {
    console.log('start 2 read file');
});

fs.readFile('info.txt', function (err, file) {
    console.log('start 1 read file');
});

