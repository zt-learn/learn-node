var o = {
    time: 12,
    name: 'leo',
    age: 22,
    sex: 'man',
    add: function (a, b) {
        return a + b;
    }
};

o.add = function (a, b) {
    return a * b;
};

console.log(o.add(1, 2));