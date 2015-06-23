/**
 * Created by leo on 2015/6/23.
 */
function Teacher(name, age) {
    this.name = name;
    this.age = age;

    this.teach = function () {
        console.log('i am teaching');
    }
}

var sb = new Teacher('sb');
sb.teach();
