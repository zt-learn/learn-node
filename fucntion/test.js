/**
 * Created by leo on 2015/4/8.
 */
var fc = require("./function");

function hello(callback) {
    var name;
    name = 'sadfasd';
    console.log(name);
    console.log(name);
    name = 'new';
    callback();
}

function test() {
    console.log('test');
}

hello(test);