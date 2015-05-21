/**
 * Created by leo on 2015/5/21.
 */
var url = require('url');

console.log(url.parse('http://nodeapi.ucdok.com:900/api/url.html', true, false));
console.log('**********************');

console.log(url.format({
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'nodeapi.ucdok.com:900',
        port: '900',
        hostname: 'nodeapi.ucdok.com',
        hash: null,
        search: '',
        query: {},
        pathname: '/api/url.html',
        path: '/api/url.html',
        href: 'http://nodeapi.ucdok.com:900/api/url.html'
    }
));
console.log('**********************');

console.log(url.resolve('/one/two/three', 'four'));
console.log(url.resolve('http://example.com', '/one'));
console.log(url.resolve('http://example.com/one', '/two'));