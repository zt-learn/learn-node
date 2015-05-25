/**
 * 事实上exports就是module.exports的引用。
 * 你可以随意往exports加属性
 * (因为是属性，便也会向module.exports上加属性，
 * 但是如果让exports=xxx，即重新定义exports，
 * 那你只是让exports成为另一个引用，module.exports的值仍然不便)，
 * 理解到exports是module.exports的引用才是最关键的
 */

exports.sub = function (a, b, callback) {
    if (a > b) {
        callback(a, b);
        return a - b;
    } else {

        callback(a, b);
        return b - a;
    }
};

module.exports.add = function (a, b) {
    return a + b;
};