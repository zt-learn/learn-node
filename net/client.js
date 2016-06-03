var net = require('net');

var isDown = false;

function start() {
  var client = net.connect({
      port: 8124
    },
    function() {
      console.log('client connected');
      client.write('world!\r\n');
    });

  var isDown = false;

  client.on('data', function(data) {
    console.log(data);
  });

  client.on('end', function() {
    isDown = true;
    console.log('客户端断开连接');
  });
}

// start();

var restart = function () {
  try {
    start()
  } catch (e) {
    start()
  }
}

setInterval(restart,1000);
