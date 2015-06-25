var a = {
    a: 12,
    b: "sdf",
    c: "sdf",
    test: function () {
        console.log(this.b);
        console.log(this);
    }
};

//a.test();

function sb(a, b) {
    this.a = a;
    this.b = b;

    this.test = function () {
        console.log("test");
    };

    this.say = function () {
        console.log('you are sb');
    }
}
var a = new sb();
a.test();