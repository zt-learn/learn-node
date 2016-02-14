var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

//event.on('some_event', function () {
//    console.log('some_event occured.');
//});

event.on('test', function () {
    console.log('test occur');
});

setInterval(function () {
    event.emit('test');
}, 1000);

//setTimeout(function () {
//    event.emit('some_event');
//}, 5000);
