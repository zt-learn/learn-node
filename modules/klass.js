/**
 * 在js中function就是类
 */

function Klass(name, age) {
    this.name = name;
    this.age = age;
}

Klass.prototype.test = function () {
    console.log('test');
};

Klass.prototype.create = function () {
    console.log("create");
};

Klass.prototype.delete = function () {
    console.log("delete");
};

Klass.prototype.update = function () {
    console.log("update");
};

Klass.prototype.find = function () {
    console.log('find');
};

module.exports = Klass;
