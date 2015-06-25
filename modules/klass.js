/**
 * Created by leo on 2015/5/12.
 */
//var student = require('./student');
//var teacher = require('./teacher');

function Klass() {
    console.log("Klass test");
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

module.exports.l = Klass;

function nima() {
    console.log('nima');
}
module.exports.a = nima;