exports.add = function (a, b) {
    return a + b;
}

exports.world = function () {
    console.log('hello world');
}

exports.sub = function (a, b) {
    console.log(a + b);
}

function list(a, b) {
    console.log(a + b);
}

exports.test = list;
