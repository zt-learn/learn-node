var events  = require('events');
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

//event.on('some_event', function () {
//    console.log('some_event occured.');
//});

event.once('test', function() {
  console.log('test occur');
});

setInterval(function() {
  event.emit('test');
}, 1000);

console.log(events.EventEmitter.listenerCount(event));

// var http = require('http');
// var server = http.createServer();
//
// server.on('test',function () {
//   console.log('htpp add listener');
// });
// server.emit('test');
//
//
// var a =1;
// a.on('test',function () {
//   console.log('a test ');
// });
//
// a.emit('test');
