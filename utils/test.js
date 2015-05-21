var util = require('util');

var a = 'ss';
var b = 'bb';
var num = 111;

console.log(util.format('%s:%s:%d', a, b, num));
console.log(util.isDate(new Date()));

util.log(a);

var obj = {
    a: 1,
    b: 2,
    c: 3
};

console.log(obj);
util.inspect(obj, {showHidden: true, depth: null});