/**
 * Created by leo on 2015/5/21.
 */
var os = require('os');

var info ={
  'os.hostname': os.hostname(),
  'os.cpus':os.cpus(),
  'os.homedir':os.homedir(),
  'os.loadavg':os.loadavg(),
  'os.networkInterfaces':os.networkInterfaces(),
  'os.type':os.type()
}
var a =1 ;
debugger
var b=2;
var c=a+b;
console.log(a+b);
console.log(info);
