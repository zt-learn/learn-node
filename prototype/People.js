function Person(name) //基类构造函数
{
    this.name = name;
}

Person.prototype.SayHello = function () //给基类构造函数的 prototype 添加方法
{
    console.log("Hello, I'm " + this.name);
};

exports.Person = new Person;

var mongoose = module.exports = exports = new Mongoose;