///**
// * Created by leo on 2015/6/23.
// */
//function People(name, age) {
//    this.name = name;
//    this.age = age;
//    this.speak = function () {
//        console.log(' i am a people' + this.name);
//    }
//}
//
//
//var a = new People('sb', '12');
//a.speak();


var Teacher = {
    name: 'sb',
    age: 11,
    teach: function () {
        console.log('i am a teacher');
    }
};
var t = new Object(Teacher);
t.teach();