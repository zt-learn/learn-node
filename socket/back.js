var fs = require('fs'),
    http = require('http'),
    sio = require('socket.io');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    response.end('Hello World\n');
});

server.listen(8388, function () {
    console.log('Server listening at http://localhost:8388/');
});
// Attach the socket.io server
io = sio.listen(server);
// store messages
var messages = [];
// Define a message handler
io.sockets.on('connection', function (socket) {
    socket.on('message', function (msg) {
        console.log('Received: ', msg);
        messages.push(msg);
        socket.broadcast.emit('message', msg);
    });
    // send messages to new clients
    messages.forEach(function (msg) {
        socket.send(msg);
    })
});