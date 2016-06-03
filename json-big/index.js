var jsonBig = require('json-bigint');

console.log(data);
var res = jsonBig.parse(data);
console.log(res.trackingId.toString());
