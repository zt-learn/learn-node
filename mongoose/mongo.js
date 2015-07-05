// mongoose 链接
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/NodeJS');

// Schema 结构
var mongooseSchema = new mongoose.Schema({
    username: {type: String, default: '匿名用户'},
    title: {type: String},
    content: {type: String},
    time: {type: Date, default: Date.now},
    age: {type: Number}
});

var mongooseModel = mongoose.model('mongoose', mongooseSchema);

/*模型查询*/
mongooseModel.find({name: 'leo'}, function (err, docs) {
    console.log(docs);
});

// 增加记录 基于 entity 操作
var doc = {username: 'emtity_demo_username', title: 'emtity_demo_title', content: 'emtity_demo_content'};
var mongooseEntity = new mongooseModel(doc);

mongooseEntity.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    //关闭数据库链接
    mongooseModel.close();
});

//// 增加记录 基于model操作
//var doc = {username: 'model_demo_username', title: 'model_demo_title', content: 'model_demo_content'};
//mongooseModel.create(doc, function (error) {
//    if (error) {
//        console.log(error);
//    } else {
//        console.log('save ok');
//    }
//    // 关闭数据库链接
//    db.close();
//});
