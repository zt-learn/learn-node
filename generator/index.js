// function* helloWorldGenerator() {
//   console.log('start');
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }

// var hw = helloWorldGenerator();

// console.log(hw);
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());




var i = 0;

function* produce() {
	console.log(i);
	// consume.next();
	yield ++i;
}

function* consume() {
	console.log(i);
	// produce.next();
	yield --i;
}

while(true){
	produce().next();
	consume().next();
}