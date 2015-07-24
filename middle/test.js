var http = require('http');

var middlewares = [
    function (req, res, next) {
        req.session = {user: 'anonymos'};
        next();
    },
    function (req, res, next) {
        res.end(req.session.user);
    }
    //还能加很多，只要注意不要多次返回
];

function requestHandler(req, res) {
    console.log(req);
    var i = 0;

    //由middlewares尾递归链式调用
    function next(err) {
        if (err) {
            return res.end('error.', err.toString());
        }

        if (i < middlewares.length) {
            middlewares[i++](req, res, next);
        } else {
            return;
        }
    }

    //触发第一个middleware
    next();
}

var server = http.createServer(requestHandler);
server.listen(3002);
//  http://localhost:3000
//  anonymos