var nodes = [{
  a: 1,
  b: 2,
  c: 3,
  status: 0
}, {
  a: 2,
  b: 2,
  c: 3,
  status: 1
}, {
  a: 3,
  b: 2,
  c: 3,
  status: 0
}, {
  a: 4,
  b: 2,
  c: 3,
  status: 1
}]

nodes = nodes.filter(function(el) {
  return el.status == 1;
})

// nodes.forEach(function(el) {
//   el.test = 1;
// })

// nodes = nodes.map(function (el) {
//   if(el.status == 0){
//     return el
//   }
// })

console.log(nodes);
