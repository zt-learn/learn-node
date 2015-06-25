

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

exports.Employee = Employee;