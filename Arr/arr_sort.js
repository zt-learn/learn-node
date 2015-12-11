var arr = [
  1, {
    sub: function(a, b) {
      if (a > b) {
        return a - b;
      } else {
        return b - a;
      }
    }
  },
  function(a, b) {
    return a + b;
  }
];

console.log(arr[1]);
console.log(arr[1]['sub'](1, 2));
console.log(arr[2](1, 2));


var str = [23, 12, 1212, 0, 12].sort();
console.log(str);


var test = [{
  createdAt: "2015-09-24T17:07:46",
  name: 'a'
}, {
  createdAt: "2015-10-24T17:09:42",
  name: 'b'
}, {
  createdAt: "2015-10-24T17:06:40",
  name: 'c'
}, {
  createdAt: "2015-10-24T17:08:55",
  name: 'd'
}];

//console.log(test);

console.log(test.sort(function(a, b) {
  if (a.createdAt > b.createdAt) {
    return -1;
  }
  if (a.createdAt < b.createdAt) {
    return 1;
  }
  return 0;
}));

//console.log(test);
