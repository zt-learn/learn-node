/**
 * Created by leo on 2015/5/12.
 */

function learn(something) {
    console.log(something);
}

function we(callback, something) {
    something += ' is cool';
    callback(something);
}

/*��������*/
we(learn, 'node js');

/*��������*/
we(function (something) {
    console.log(something);
}, 'is cool');

console.log('test');
