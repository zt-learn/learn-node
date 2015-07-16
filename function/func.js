/**
 *  function其实也是个对象 。
 * 你直接 function.obj ，那这个会到游戏退出 才放掉。
 * 如果 是function的原型链上的变量， 那就随着 new function 的生命周期。
 */

var T = function (a, b) {
    this.a = a;
    this.b = b;

    this.test1 = function () {
        console.log("test1");
    };
};

T.test2 = function () {
    console.log("test2");
};

T.prototype.test3 = function () {
    console.log('test3');
};

T.test2();

var sss = new T();
sss.test1();
//sss.test2();
sss.test3();

console.log(T);
console.log(sss);
console.log(T['test2']);


