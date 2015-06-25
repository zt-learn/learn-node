function Person(name) //基类构造函数
{
    this.name = name;
}

Person.prototype.SayHello = function () //给基类构造函数的 prototype 添加方法
{
    console.log("Hello, I'm " + this.name);
};

function Employee(name, salary) //子类构造函数
{
    Person.call(this, name); //调用基类构造函数
    this.salary = salary;
}

Employee.prototype = new Person(); //建一个基类的对象作为子类原型的原型，这里很有意思

Employee.prototype.ShowMeTheMoney = function () //给子类添构造函数的 prototype 添加方法
{
    console.log(this.name + " $" + this.salary);
};

var BillGates = new Person("Bill Gates"); //创建基类 Person 的 BillGates 对象
var SteveJobs = new Employee("Steve Jobs", 1234); //创建子类 Employee的 SteveJobs 对象

BillGates.SayHello(); //通过对象直接调用到 prototype 的方法

SteveJobs.SayHello(); //通过子类对象直接调用基类 prototype 的方法，关注！
SteveJobs.ShowMeTheMoney(); //通过子类对象直接调用子类 prototype 的方法

console.log(BillGates.SayHello == SteveJobs.SayHello); //显示： true，表明 prototype 的方法是共享的
