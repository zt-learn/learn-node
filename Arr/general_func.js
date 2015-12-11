/**
 * Created by zhentaoo on 15/11/4.
 */
var arr = [1, 2, 5, 4];

var arr2 = arr.filter(function(element, i, arr) {
  return element != 2;
})
console.log(arr2);

var arr3 = arr.map(function(elment, i, array) {
  return elment * 10;
})
console.log(arr3);

var a ＝ arr.every(function(element, index, array) {
	return element > 10;
})
console.log(a);
console.log(arr.indexOf(9));

