var zlib = require('zlib');

var buffer = new Buffer('asdfadsf', 'base64');
zlib.unzip(buffer, function (err, buffer) {
    if (!err) {
        console.log(buffer.toString());
    }
});
