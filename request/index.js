/**
 * Created by leo on 2015/5/18.
 */
var req = require('request');

var url = 'http://fuss.alpha.elenet.me/8/e9/d3581af07b9a6ba3e293d5c8c1c83jpeg.jpeg';

req(url, function (error, response, body) {
    console.log(body);

    //if (!error && response.statusCode == 200) {
    //    console.log(body);
    //}
    //if (error) {
    //    console.log(error);
    //}
});

var a = Buffer;
