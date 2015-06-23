function Dog(name) {
    this.name = name;

    /*实例对象共有属性*/
    this.sex = 'man';
}

/*Dog对象共有的属性*/
Dog.prototype.type = 'life';

/*实例*/
dogA = new Dog('dogA');
dogB = new Dog('dogB');

console.log(dogA.name);
console.log(dogA.sex);

console.log(dogB.name);
console.log(dogB.sex);


console.log(dogA.type);
Dog.prototype.type = 'heh';
console.log(dogB.type);




