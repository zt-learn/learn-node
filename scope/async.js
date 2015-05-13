/**
 * Created by leo on 2015/5/12.
 */

/*同步，阻塞*/
//var i = 0;
//
//while (true) {
//    i++;
//    console.log(i);
//}
//

var c = 0;
function print() {
    console.log(c);
}

function plus(callback) {
    setTimeout(function () {
        c += 1;
        callback();
    }, 1000);
}

plus(print);