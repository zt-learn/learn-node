/**
 * Created by leo on 2015/5/12.
 */
var klass = require('./klass');
var test = require('./test.js');

//klass.add('sb', ['bfm', 'gfs', 'gfs', 'bfm']);
//klass.test();
//
//var a = 'sdfs';
//console.log(klass.a);


test.sub(2, 1, function (a, b) {
    console.log('a:' + a);
    //console.log('b:' + b);
});

//console.log(num);