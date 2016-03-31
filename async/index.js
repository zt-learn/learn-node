var fs = require('fs');
var q = require('q');

var fileName = 'info.txt';

// 1.生成promise函数:
var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error)
        reject(error);
      resolve(data);
    });
  });
};

readFile('info.txt')
  .then(function (data) {
    console.log(data.toString());
  })
  .catch(function (err) {
    console.log(err.toString());
  });

// 2.generator函数
var gen = function* () {
  var f1 = yield readFile('./info.txt');
  var f2 = yield readFile('./info2.txt');
  console.log(f1.toString());
  console.log(f2.toString());
};

// 3.推动generator运行,使用q
q.async(gen)();


// es7: async函数相当于2.3步骤:

// var asyncReadFile = async function (){
//   var f1 = await readFile('/etc/fstab');
//   var f2 = await readFile('/etc/shells');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };
