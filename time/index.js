/**
 * Created by leo on 2015/8/3.
 */

var moment = require('moment');
console.log(Date.now());


var timeStamp = new Date(parseInt('1438598752886'));
var date = timeStamp.toLocaleString();
console.log(date);

var str = "2015-08-03 18:45:52";
var timeStamp2=new Date("2015-11-23T14:28:10.000Z").getTime()/1000;
console.log(timeStamp2);
console.log(typeof timeStamp2);

console.log(moment().format('YYYY-MM-DD HH:mm:ss'));