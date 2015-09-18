var FS = require('fs'),
  Q = require('q'),
  colors = require('colors'),
  file = 'file/1.txt';

var fsReadFile = Q.nfcall(FS.readFile, file, 'utf-8');
fsReadFile.then(function (result) {
    console.log(('invoke in nfcall' + file).yellow);
    console.log(result.green);
  }, function (error) {
    console.log('invoke in nfcall'.red);
    console.log(error.toString().red);
  }
);