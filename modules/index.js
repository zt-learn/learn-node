/**
 * 在js中：function就是类
 *
 */
var leo = require('./leo');

/*JS中函数的使用方式1,但是不能使用原型方法*/
//klass();

/*JS中函数的使用方式2:当作类来使用*/
var test = new leo.String("sb", '123');
test.test();

console.log(test.name);
console.log(test.age);