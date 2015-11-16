/**
 * Created by zhentaoo on 15/11/4.
 */
//var base64Data = data.replace(/^data:image/png;base64,/,"");
//务必删除mine信息才能转化
var fs = require("fs");
var request = require('request');

var url = 'http://fuss.alpha.elenet.me/8/e9/d3581af07b9a6ba3e293d5c8c1c83jpeg.jpeg';

request(url, function (err, response, body) {
  console.log(body);
  fs.writeFile('1.jpeg',body);
});
