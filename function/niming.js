/**
 * 通过打印可以看出以下匿名函数也都是函数
 */
console.log(typeof function () {
});

console.log(typeof function (x, y) {
    return x + y;
});

console.log(typeof new Function("x", "y", "return x*y;"));

/**
 * 匿名函数的调用
 * 要调用一个函数，我们必须要有方法定位它，引用它。所以，我们会需要帮它找一个名字。
 * 例如：复制代码 代码如下:
 */
var add = function (x, y) {
    return x + y;
};
console.log(add(2, 3));

/**
 * 一个匿名函数被括起来，然后再在后面加一个括号，这个匿名函数就能立即运行起来
 * 原理：
 * 小括号能把我们的表达式组合分块，并且每一块，也就是每一对小括号，都有一个返回值
 */
(function (str) {
    console.log(str);
})('niming hansssshu ');

console.log((function (x, y) {
    return x + y;
})(2, 34));

console.log((function () {
    return 'niming test';
})());