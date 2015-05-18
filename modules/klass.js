/**
 * Created by leo on 2015/5/12.
 */
var student = require('./student');
var teacher = require('./teacher');

function add(teacherName, students) {
    teacher.add(teacherName);

    students.forEach(
        function (item, index) {
            student.add(item);
        }
    )
}

function test() {
    console.log('test');
}

var a = 'a';

exports.add = add;
exports.test = test;
module.exports.a = a;