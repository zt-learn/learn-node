/**
 * 在js中：function就是类
 *
 */
var klass = require('./klass');


var a = new klass("sb",'123');
a.test();

console.log(a.name);
console.log(a.age);