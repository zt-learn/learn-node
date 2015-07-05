// mongoose ����
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/NodeJS');

// Schema �ṹ
var mongooseSchema = new mongoose.Schema({
    username: {type: String, default: '�����û�'},
    title: {type: String},
    content: {type: String},
    time: {type: Date, default: Date.now},
    age: {type: Number}
});

var mongooseModel = mongoose.model('mongoose', mongooseSchema);

/*ģ�Ͳ�ѯ*/
mongooseModel.find({name: 'leo'}, function (err, docs) {
    console.log(docs);
});

// ���Ӽ�¼ ���� entity ����
var doc = {username: 'emtity_demo_username', title: 'emtity_demo_title', content: 'emtity_demo_content'};
var mongooseEntity = new mongooseModel(doc);

mongooseEntity.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    //�ر����ݿ�����
    mongooseModel.close();
});

//// ���Ӽ�¼ ����model����
//var doc = {username: 'model_demo_username', title: 'model_demo_title', content: 'model_demo_content'};
//mongooseModel.create(doc, function (error) {
//    if (error) {
//        console.log(error);
//    } else {
//        console.log('save ok');
//    }
//    // �ر����ݿ�����
//    db.close();
//});
