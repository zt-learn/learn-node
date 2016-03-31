var net = require('net');

var server = net.createServer(function (c) { // 'connection' 监听器
    console.log('服务器启动');
    c.on('end', function () {
        console.log('服务器已断开');
    });
    c.on('data',function (msg) {
      console.log(msg.toString());
    });
});

server.listen(8124, function () { // 'listening' 监听器
    console.log('服务器已绑定:8124');
});
