/**
 * Created by zhentaoo on 15/9/26.
 */
var crypto=require('crypto');

var md5sum=crypto.createHash('md5');
md5sum.update('Aa123456');
str=md5sum.digest('hex');
console.log(str);