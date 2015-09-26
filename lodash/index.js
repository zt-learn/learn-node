/**
 * Created by zhentaoo on 15/9/26.
 */
var _ = require('lodash');
var moment = require('moment');

//将多个json合并,属性重复的合并,取前面的
var a = _.defaults({
  startTime: 2,
  a:111,
  b:111
}, {
  startTime: moment().add(-7, 'days').format('YYYY-MM-DD HH:mm:ss'),
  endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  limit: 30
}, {
  a: 333
}, {
  b: 4444
});
console.log(a);