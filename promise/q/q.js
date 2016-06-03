var Q = require('q');
var fs = require('fs');
//Q 的使用一
var preadFile = function (file) {
    var deferred = Q.defer();//
    fs.readFile(file, "utf8", function (err, data) {
        if (!err) {
            deferred.resolve(data);//成功返回的数据
        } else {
            deferred.reject(err);//失败返回的错误信息
        }
    });
    return deferred.promise;//必须返回这个
};

preadFile("test1.txt").then(function (data) {//then方法有两个参数(成功回调，失败回调)
    console.log(data);
}, function (error) {
    console.error(error);
});


//Q 的 all组合方法(你可以把一系列promises到整个promises中)
function test(value) {
    return Q.delay(value, 1000);//延迟1秒
}

Q.all([
    test(10),//执行三个函数
    test(20),
    test(30)
])
    .spread(function (x, y, z) {//三个函数返回的三个值
        console.log(x, y, z);
        return x + y + z;
    })
    .done(function (str) {//完成前面的后执行
        console.log(str)
    });