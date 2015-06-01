function Dog(name) {
    this.name = name;

    /*实例对象共有属性*/
    this.sex = 'man';
}

/*Dog对象共有的属性*/
Dog.prototype.type = 'life';

/*实例A*/
dogA = new Dog('dogA');
console.log(dogA.name);
console.log(dogA.sex);
console.log(dogA.type);
console.log('*********************');
Dog.prototype.type = 'heh';
/*实例B*/
dogB = new Dog('dogB');
console.log(dogB.name);
console.log(dogB.sex);
console.log(dogB.type);