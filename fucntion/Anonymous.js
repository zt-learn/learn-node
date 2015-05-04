/*test*/

function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, 123);


/*niming function test */
function execute2(someFunction, value) {
    someFunction(value);
}

execute2(function (word) {
    console.log(word)
}, "Hello execute2");

/*http function test*/
var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello s word");
    response.end();
}).listen(8888);
