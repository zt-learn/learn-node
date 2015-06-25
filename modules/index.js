/**
 * 在js中：function就是类
 *
 */
var klass = require('./klass');

/*JS中函数的使用方式1,但是不能使用原型方法*/
klass();

/*JS中函数的使用方式2:当作类来使用*/
var a = new klass("sb", '123');
a.test();

console.log(a.name);
console.log(a.age);