var Emitter = require('component-emitter');
var emitter = new Emitter({a: 11});

emitter.on('something', function (el) {
  console.log(el);
})

emitter.emit('something', 111);
console.log(emitter);
