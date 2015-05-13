/**
 * js的作用域
 */

var globalVariable = 'this is global variable';

function globalFunction() {
    var localVariable = 'this is local variable';

    console.log('visit global/local variable');
    console.log(globalVariable);
    console.log(localVariable);

    globalVariable = 'new globalVariable';
    console.log(globalVariable);

    function localFunction() {
        var innerLocalVariable = 'this is inner local variable';

        console.log('visit global/local/innerLocal variable');
        console.log(globalVariable);
        console.log(localVariable);
        console.log(innerLocalVariable);
    }

    localFunction();
}

globalFunction();