var DirTools = require('./index.js').DirTools;
var FileTools = require('./index.js').FileTools;

// 文件操作测试
// FileTools.isExist('./info.txt');

// 文件夹操作测试
// DirTools.isExist('./s');
// DirTools.mkDir('./tk')
// DirTools.rmDir('./sssss')


// console.log(DirTools.readDir(process.cwd()));


// FileTools.rmFile('./tk/1.js');



// FileTools.createFile('./newF/infos2.txt','woshi csdfa');

console.log(FileTools.readFile('./tk/10.js').toString());
