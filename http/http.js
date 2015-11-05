var http = require('http');
var request = require('request');
var fs = require('fs');

http.createServer(function (req, response) {
  response.writeHead(200, {
    'Content-Type': 'application/octet-stream',
    'Content-Disposition': 'attachment; filename=doodle.png'
  });
  var url = "http://fuss.alpha.elenet.me/8/e9/d3581af07b9a6ba3e293d5c8c1c83jpeg.jpeg";
  request(url).pipe(response);



  //var img = fs.readFileSync('./doodle.png');
  //response.end(img);


}).listen(1188);

console.log('Server running at http://127.0.0.1:1188/');