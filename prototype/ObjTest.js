/**
 * Created by leo on 2015/6/27.
 */
var obj = {
    b: function () {
        console.log("b");
    }
};
//obj.prototype.a = function () {
//    console.log('test');
//};

obj.b();

//obj.a();


var fc = function () {
    this.b = function () {
        console.log("b");
    }
};



fc.b();