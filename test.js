var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(req['readable']);
    res.send('hello world');
});

app.listen(3001);