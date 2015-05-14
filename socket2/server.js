var net = require('net');

var chatServer = net.createServer();

chatServer.on('connection', function (client) {
    client.write('Hi!\n'); // 服务端向客户端输出信息，使用 write() 方法
    client.write('Bye!\n');
    console.log('sdfsdf');
    //client.end(); // 服务端结束该次会话
});

chatServer.listen(9000);