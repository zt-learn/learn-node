/**
 * Created by leo on 2015/8/3.
 */

/*获取当前时间戳*/
var moment = require('moment');
console.log(Date.now());

/*时间戳转化成日期*/
var timeStamp = new Date(parseInt('1438598752886'));
var date = timeStamp.toLocaleString();
console.log(date);

var str = "2015-08-03 18:45:52";
var timeStamp2=new Date("2015-11-23T14:28:10.000Z").getTime()/1000;
console.log(timeStamp2);
console.log(typeof timeStamp2);


console.log(new Date(moment().format('YYYY-MM-DD') + ' 00:00:00'));