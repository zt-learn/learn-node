var http = require('http');

var middlewares = [
    function (req, res, next) {
        req.session = {user: 'anonymos'};
        next();
    },
    function (req, res, next) {
        res.end(req.session.user);
    }
    //���ܼӺֻܶ࣬Ҫע�ⲻҪ��η���
];

function requestHandler(req, res) {
    console.log(req);
    var i = 0;

    //��middlewaresβ�ݹ���ʽ����
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

    //������һ��middleware
    next();
}

var server = http.createServer(requestHandler);
server.listen(3002);
//  http://localhost:3000
//  anonymos