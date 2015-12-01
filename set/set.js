var s = new Set();
var item = new Set([1, 2, 3, 3, 3, 2]);

console.log(item);
console.log(item.size);
console.log(item.has(1));
console.log(item.has(4));

var arr = [1, 2, 3, 4];
console.log(arr);

var arr2 = arr.filter(function(el, i, arr) {
  return (el !=  2);
})
console.log(arr2);
