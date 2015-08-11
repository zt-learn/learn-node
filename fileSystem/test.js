/**
 * Created by leo on 2015/5/4.
 */
var fs = require('fs');

fs.readFile('info2.txt', function (err, file) {
    console.log(file.toString());
    console.log('start 2 read file');
});

fs.readFile('info.txt', function (err, file) {
    console.log('start 1 read file');
});

var arr = 'testtestest';
fs.writeFile('info3.txt', arr, function (err) {
    if (err) {
        console.log('fs write error');
    } else {
        console.log('fs write ok');
    }
});

fs.appendFile('info.txt', arr, function (err) {
    if (err) {
        console.log('fs write error');
    } else {
        console.log('fs write ok');
    }
});


function readIP(path, callback) {
    fs.readFile(path, function (err, data) {
        if (err) {
            callback(err)
        } else {
            try {
                data = JSON.parse(data)
                callback(null, data)
            } catch (error) {
                callback(error)
            }
        }
    })
}