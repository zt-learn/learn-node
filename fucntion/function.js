function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

exports.mul=function mul(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function list(a, b) {
    console.log(add(a, b));
}

/*函数赋值给变量*/
var ggg = division;

/*匿名函数*/
var anonymous = function () {
    return 121212;
};

/*程序执行*/
//console.log(ggg(12, 29));
//
//console.log(anonymous());