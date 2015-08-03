/**
 * Created by leo on 2015/8/3.
 */

/*获取当前时间戳*/
console.log(Date.now());

/*时间戳转化成日期*/
var timeStamp = new Date(Date.now() * 1000);
var date = timeStamp.toLocaleString();
console.log(date);


