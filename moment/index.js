var moment =require('moment');

console.log(moment().format('d'));
console.log(moment().format('D'));

console.log(moment().add(0, 'days').format('YYYY-MM-DD') + " 00:00:00");
console.log(moment().add(0, 'days').format('YYYY-MM-DD HH:mm:ss'));

