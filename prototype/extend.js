function Father() {}

Father.prototype.say = function () {
  console.log('Father can say');
}

var f = new Father();

function Son() {}

Son.prototype = new Father();

Son.prototype.eat = function () {
  console.log('son can eat');
}

var s = new Son();
