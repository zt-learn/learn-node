var express = require('express');
var app = express();

app.set('zhentao', 'nb');
// console.log(app.get('zhentao'));

app.get('/', function (req, res) {
    res.send('hello world');
    console.log(app.get('zhentao'));
    console.log('hello world');
}).listen('8809');
