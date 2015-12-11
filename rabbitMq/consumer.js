var q = 'solitude.order.dipatch';

var open = require('amqplib').connect('amqp://zeus:zeus@vpca-zeus-rabbitmq-1.vm.elenet.me:5672/zeus');

// {"cs_id":"1",
// "order_id":"2",
// "order_type":"12",
// "updated_at":"2015-12-02 12:00:00"}

// Consumer
open.then(function(conn) {
  var ok = conn.createChannel();

  ok = ok.then(function(ch) {
    ch.assertQueue(q);
    ch.consume(q, function(msg) {
      if (msg !== null) {
        console.log(msg.content.toString());
        ch.ack(msg);
      }
    });
  });
  return ok;
}).catch(function(err) {
  console.log(err)
});
