var a = [{'9700': 12}, {'54': 3}];

a.sort();

var min=0;
for(var k in a[0]){
  min =a[0][k];
}

//var key= a[0].keys();
console.log(min);
//var min=a[0][]
//for(var k in a ){
//
//}


//var T = function (a, b) {
//    this.a = a;
//    this.b = b;
//
//    this.test1 = function () {
//        console.log("test1");
//    };
//};
//
//T.test2 = function () {
//    console.log("test2");
//};
//
//T.prototype.test3 = function () {
//    console.log('test3');
//};
//
////T.test2();
////
////var sss=new T();
////sss.test1();
////sss.test2();
////sss.test3();
//
//console.log(T);