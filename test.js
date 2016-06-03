// console.log('this:',this);
// console.log('process:',process);
var glb = 1;

var a = function () {
  var glb =2;
  console.log('this:',this);
  console.log('this == process:',this.process == process);
}
a();

// console.log('this:',this);
