// mongoose ����
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/NodeJS');

// ���Ӵ���
db.on('error', function (error) {
    console.log(error);
});

// Schema �ṹ
var mongooseSchema = new mongoose.Schema({
    username: {type: String, default: '�����û�'},
    title: {type: String},
    content: {type: String},
    time: {type: Date, default: Date.now},
    age: {type: Number}
});

// ��� mongoose ʵ������
mongooseSchema.methods.findbyusername = function (username, callback) {
    return this.model('mongoose').find({username: username}, callback);
};

// ��� mongoose ��̬��������̬������Model�����ʹ��
mongooseSchema.statics.findbytitle = function (title, callback) {
    return this.model('mongoose').find({title: title}, callback);
};

// model
var mongooseModel = db.model('mongoose', mongooseSchema);

// ���Ӽ�¼ ���� entity ����
var doc = {username: 'emtity_demo_username', title: 'emtity_demo_title', content: 'emtity_demo_content'};
var mongooseEntity = new mongooseModel(doc);

mongooseEntity.save(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // �ر����ݿ�����
    db.close();
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
