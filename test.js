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

//T.test2();
//
//var sss=new T();
//sss.test1();
//sss.test2();
//sss.test3();

console.log(T);