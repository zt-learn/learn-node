var arr = [
    1,
    {
        sub: function (a, b) {
            if (a > b) {
                return a - b;
            } else {
                return b - a;
            }
        }
    },
    function (a, b) {
        return a + b;
    }
];

console.log(arr[1]);

console.log(arr[1]['sub'](1, 2));

console.log(arr[2](1, 2));