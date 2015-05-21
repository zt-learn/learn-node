var tls = require('tls');

var server = tls.createServer(options, function (socket) {
    console.log('服务器已连接',
        socket.authorized ? '已授权' : '未授权');
    socket.write("欢迎！\n");
    socket.setEncoding('utf8');
    socket.pipe(socket);
});
server.listen(8000, function () {
    console.log('服务器已绑定');
});