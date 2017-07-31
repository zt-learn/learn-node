var UglifyJS = require('uglify-js');

// console.log(UglifyJS);

var ast = UglifyJS.parse('function sum(foo, bar){ return foo + bar; }');

console.log(ast);
