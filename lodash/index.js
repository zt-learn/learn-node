/**
 * Created by zhentaoo on 15/9/26.
 */
var _ = require('lodash');
var moment = require('moment');
var Int64 = require('node-int64');
var bignum = require('bignum');


//var arr=[
//  {
//    a:1,
//    b:1
//  },
//  {
//    a:2,
//    b:2
//  }
//];
//console.log(arr);
//arr[1]['c']=2;
//console.log(arr);


console.log([].length);

//var num="123123123123123123123123123";
//console.log(new Int64(bignum(num).toBuffer({size:8})));

//
//console.log(JSON.parse('{         "orderId": 6,         "userPhone": "13761687966",         "compensationLevel": "1",         "userName": "sss",                "pointChange": 100,         "pointChangeReason":"长得帅"       }'));
//
//console.log((typeof 'sdf') =='string');

//
//console.log(!_.contains([1,2,3,3],2))
////将多个json合并,属性重复的合并,取前面的
////var a = _.defaults({
////  startTime: 2,
////  a:111,
////  b:111
////}, {
////  startTime: moment().add(-7, 'days').format('YYYY-MM-DD HH:mm:ss'),
////  endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
////  limit: 30
////}, {
////  a: 333
////}, {
////  b: 4444
////});
////console.log(a);
//
//console.log(_.union([1],[1,2,3,4]).length);