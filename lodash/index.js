/**
 * Created by zhentaoo on 15/9/26.
 */
var _ = require('lodash');
var moment=require('moment');

var a=_.defaults({startTime:2}, {
  startTime: moment().add(-7, 'days').format('YYYY-MM-DD HH:mm:ss'),
  endTime: moment().format('YYYY-MM-DD HH:mm:ss'),
  limit: 30
}, {
  a:1
});
console.log(a);