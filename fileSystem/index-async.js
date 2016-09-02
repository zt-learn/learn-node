/**
 * Created by leo on 2015/5/4.
 */
var fs = require('fs');
// 文件操作，异步版本
// 读文件
fs.readFile('info.txt', function (err, file) {
   console.log('start 1 read file');
});

// 写文件
var arr = 'testtestest';
fs.writeFile('info3.txt', arr, function (err) {
   if (err) {
       console.log('fs write error');
   } else {
       console.log('fs write ok');
   }
});

// 在文件后追加内容
fs.appendFile('info.txt', arr, function (err) {
   if (err) {
       console.log('fs write error');
   } else {
       console.log('fs write ok');
   }
});


function readIP(path, callback) {
   fs.readFile(path, function (err, data) {
       if (err) {
           callback(err)
       } else {
           try {
               data = JSON.parse(data)
               callback(null, data)
           } catch (error) {
               callback(error)
           }
       }
   })
}
