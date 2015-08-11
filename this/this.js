/**
 * 1 全局代码中的this
 */
console.log("******************1******************");
console.log(this);


/**
 * 2 作为单纯的函数调用
 *   这里this指向了全局对象，即window。在严格模式中，则是undefined。
 */
console.log("******************2******************");
var x = 1;

function fooCoder(x) {
    this.x=x;
    console.log(this.x);
}
fooCoder('333foo');
console.log(x);

/**
 * 3作为构造函数
 *  函数内部的this指向新创建的对象。
 */
console.log("******************3******************");
var f = new fooCoder(2);
console.log(f.x);


/**
 * 4.作为对象的方法调用
 *   this指向person对象，即当前对象
 */
console.log("******************4******************");
var name = "clever coder";
var person = {
    name: "foocoder",
    hello: function (sth) {
        var name = 'hehe';
        console.log(this.name + " says " + sth);
    }
};
person.hello("hello world");

/**
 * 5内部函数
 * 在内部函数中，this没有按预想的绑定到外层函数对象上，而是绑定到了全局对象。
 * 这里普遍被认为是JavaScript语言的设计错误，
 * 因为没有人想让内部函数中的this指向全局对象。
 * 一般的处理方式是将this作为变量保存下来，一般约定为that或者self：
 */
console.log("*****************5******************");

var coder = "clever coder";
var people = {
    coder: "foocoder",

    hello: function (sth) {
        var that = this;
        var sayhello = function (sth) {
            console.log(that.coder + " says " + sth);
            console.log(this.coder + " says " + sth);
        };
        sayhello(sth);
    }
};

people.hello("hello world");
//clever coder says hello world



