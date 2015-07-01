/**
 * 在js中function就是类
 */

var leo = {};
leo.String = function (name, age) {
    this.name = name;
    this.age = age;
    console.log('Klass is init .....');
};

leo.String.prototype.test = function () {
    console.log(this.name);
};

leo.String.prototype.create = function () {
    console.log("create");
};

leo.String.prototype.delete = function () {
    console.log("delete");
};

leo.String.prototype.update = function () {
    console.log("update");
};

leo.String.prototype.find = function () {
    console.log('find');
};

module.exports = leo;
