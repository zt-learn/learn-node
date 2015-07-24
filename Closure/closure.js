/**
 * 当一个子函数引用一个母函数中的变量，
 * 且又将这个子函数作为母函数的返回值返回
 *
 * 当你最后调用 result()时，其实就产生了闭包。result引用的其实是f2;因为f2作为了f1的返回值。
 * 而f2中有调用了f1中的n，所以，在返回时，n也要连带的被返回出来。其实用起来合情合理。没神马异常的地方。
 *
 */
function f1() {
    var n = 999;

    function f2() {
        console.log(n);
    }

    return f2;
}
var result = f1();//result=f2;
result(); //f2(): 999

/*
 闭包和引用

 闭包是 JavaScript 一个非常重要的特性，这意味着当前作用域总是能够访问外部作用域中的变量。
 因为 函数 是 JavaScript 中唯一拥有自身作用域的结构，因此闭包的创建依赖于函数。

 模拟私有变量
 */

function Counter(start) {
    var count = start;
    return {
        increment: function () {
            count++;
        },

        get: function () {
            return count;
        }
    }
}

var foo = Counter(4);
foo.increment();
console.log(foo.get()); // 5