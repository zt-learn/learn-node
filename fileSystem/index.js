var fs = require('fs');
var args = process.argv.splice(2);

/**文件操作，同步版本**/
var FileTools = {
  // 判断文件是否存在
  isExist: function(path) {
    var data = fs.existsSync(path);
    console.log(path + ' ' + (data ? '存在' : '不存在'));
  },
  // 删除文件
  rmFile: function() {},
  // 新建／覆盖原文件内容
  createFile: function() {},
  // 读文件
  readFile: function(path) {
    var data = fs.readFileSync(path);
    console.log(data.toString());
  },
  // 追加文件内容
  appendFile: function() {
    var data = fs.writeFileSync(filename, data)
  },
  // 关闭文件
  closeFile: function() {
    fs.closeSync();
  }
};

var DirTools = {
  // 判断文件夹是否存在
  isExist: function(path) {
    var data = fs.existsSync(path);
    return data;
  },
  // 创建文件夹
  mkDir: function(path) {
    if (!DirTools.isExist(path)) {
      var data = fs.mkdirSync(path);
    }
  },
  //删除文件夹
  rmDir: function(path) {
    if (DirTools.isExist(path)) {
      var data = fs.rmdirSync(path);
    }
  },
  // 读取文件夹下所有文件
  readDir: function(path) {
    var data = fs.readdirSync(path);
    return data;
  }
};

exports.DirTools = DirTools;
exports.FileTools = FileTools;
