/**
 * Created by leo on 2015/5/18.
 */
var req = require('request');
req('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
    if (error) {
        console.log(error);
    }
});

var a = Buffer;
