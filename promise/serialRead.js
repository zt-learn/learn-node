var fs = require('fs');

/*∞¥À≥–Ú∂¡»°*/
fs.readFile('file/1.txt', function (err, data) {
    console.log(data.toString());
    fs.readFile('file/2.txt', function (err, data) {
        console.log(data.toString());
        fs.readFile('file/3.txt', function (err, data) {
            console.log(data.toString());
            fs.readFile('file/4.txt', function (err, data) {
                console.log(data.toString());
                fs.readFile('file/5.txt', function (err, data) {
                    console.log(data.toString());
                });
            });
        });
    });
});