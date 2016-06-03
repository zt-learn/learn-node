var Promise = require('bluebird');
var fs = require('fs');

// fs.readFile('./file/1.txt', function(err, data) {
//   if (err) {
//     console.log('err:', err);
//   } else {
//     console.log('data:', data);
//   }
// });

function fileAsync(url) {
  return new Promise(function(resolve, reject) {
    fs.readFile(url, function(err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    });
  })
}


fileAsync('./file/1.txt')
  .then(function(data) {
    console.log('then:',data);
  })
  .catch(function(err) {
    console.log('catch:',err);
  })
