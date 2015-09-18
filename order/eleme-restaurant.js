var Q = require('q');
var ers_types = require('../../gen-nodejs/ers_types');
var request = require('request');
var logger = require('log4js').getLogger('ElemeRestaurant');
var JSONbig = require('json-bigint');

//ers_types.TRestaurant.prototype.toJSON = function () {
//  try {
//    this.attribute = JSON.parse(this.attribute);
//    this.deliver_area = JSON.parse(this.deliver_area);
//    this.deliver_geojson = JSON.parse(this.deliver_geojson);
//  } catch (err) {
//    console.error('TRestaurant.id:%s to json', this.id, err);
//  }
//  return this;
//};

module.exports = function (ElemeRestaurant) {

  /**
   * 根据短信电话查询餐厅
   * @param phone
   * @return {Promise.<T>}
   */
  ElemeRestaurant.get_by_phone = function (phone) {

    var query = new ers_types.TRestaurantQuery({phone: phone});

    return ElemeRestaurant.walle_query_restaurant(query)
      .then(function (result) {
        if (result.length) {
          return result[0];
        } else {
          return Q.reject(new Error('phone not exist'));
        }
      }).catch(function (err) {
        return Q.reject(err);
      });
  };

  /**
   * 根据手机号码判断商家
   * @param mobile
   * @return {*}
   */
  ElemeRestaurant.check_by_mobile = function (mobile) {
    return Q.async(function *() {
      var rst;
      try {
        rst = yield ElemeRestaurant.get_by_mobile(mobile);
        return rst;
      } catch (e) {
        try {
          rst = yield  ElemeRestaurant.get_by_phone(mobile);
          return rst;
        } catch (e) {
          try {
            rst = yield ElemeRestaurant.app.models.ElemeUser.get_restaurant_admin_by_identify(mobile);
            return rst;
          } catch (e) {
            try {
              rst = yield ElemeRestaurant.app.models.Javis.get_open_rst_oepn_status_by_mobile(mobile);
              return rst;
            } catch (e) {
              throw e;
            }
          }
        }
      }
    })();


    //
  };

  ElemeRestaurant.get_rst_id = function (mobile) {
    return Q.async(function *() {
      var rst;
      try {
        rst = yield ElemeRestaurant.get_by_mobile(mobile);
        return {id: rst.id};
      } catch (e) {
        try {
          rst = yield  ElemeRestaurant.get_by_phone(mobile);
          return {id: rst.id};
        } catch (e) {
          try {
            rst = yield ElemeRestaurant.app.models.ElemeUser.get_restaurant_admin_by_identify(mobile);
            return {id: rst[0].restaurant_id};
          } catch (e) {
            throw e;
          }
        }
      }
    })();
  };

  ElemeRestaurant.get_rst_info = function (mobile) {
    console.log('zhentaoo:get_rst_info');
    return ElemeRestaurant.get_rst_id(mobile)
      .then(function (data) {
        return ElemeRestaurant.get(data.id);
      }).catch(function (err) {
        return Q.reject(err);
      });
  };

  /**
   * 根据餐厅id,查询餐厅信息
   * @param id
   * @returns {Promise.<T>}
   */
  ElemeRestaurant.get= function (id) {
    return ElemeRestaurant.get(id)
        .then(function (data) {
          return data;
        }).catch(function (err) {
          return Q.reject(err);
        });
  };


  ElemeRestaurant.get_bill_list = function (filter) {
    var deferred = Q.defer();
    var api = "/h5api_service/bill/generalPCBillList";
    request({
      uri: process.env.rst_bill_url + api,
      method: 'POST',
      json: true,
      body: filter
    }, function (err, response, body) {
      if (err) {
        deferred.reject(err);
      } else if (body.result === '[]' || body.error !== null) {
         deferred.reject(new Error('no bill info!'));
      } else {
        try {
          deferred.resolve(JSONbig.parse(body.result));
        }
        catch (e) {
           deferred.reject(new Error('no bill info!'));
        }
      }

    });
    return deferred.promise;
  };

  ElemeRestaurant.get_balance_list = function (filter) {
    var deferred = Q.defer();
    var api = "/h5api_service/balance/traces";
    request({
      uri: process.env.rst_bill_url + api,
      method: 'POST',
      json: true,
      body: filter
    }, function (err, response, body) {
      if (err)
        return deferred.reject(err);
      if (body.error !== null)
        return deferred.reject(new Error('no bill info!'));
      deferred.resolve(body.result);
    });
    return deferred.promise;
  };

  ElemeRestaurant.observe('before query_city', function (ctx, next) {
    ctx.args[0] = new ers_types.TCityQuery(ctx.args[0]);
    next();
  });

  ElemeRestaurant.observe('before update_restaurant', function (ctx, next) {
    ctx.args[2] = new ers_types.TRestaurant(ctx.args[2]);
    next();
  });

  ElemeRestaurant.observe('after set_restaurant_status', function (ctx, next) {
    ctx.result = {status: ctx.result};
    next();
  });

  ElemeRestaurant.observe('after update_restaurant', function (ctx, next) {
    var result = ctx.result ? ctx.result : 1;
    ctx.result = {status: result};
    next();
  });

  ElemeRestaurant.remoteMethod('get_by_mobile', {
    accepts: [{arg: 'mobile', type: 'string'}],
    returns: {arg: 'result', type: 'object', root: true},
    http: {verb: 'get'},
    description: '根据餐厅绑定号码查询餐厅'
  });

  ElemeRestaurant.remoteMethod('get_rst_id', {
    accepts: [{arg: 'mobile', type: 'string'}],
    returns: {arg: 'result', type: 'object', root: true},
    http: {verb: 'get'},
    description: '根据餐厅绑定号码查询餐厅'
  });

  ElemeRestaurant.remoteMethod('get_rst_info', {
    accepts: [{arg: 'mobile', type: 'string'}],
    returns: {arg: 'result', type: 'number', root: true},
    http: {verb: 'get'},
    description: '根据餐厅绑定号码查询餐厅'
  });

  ElemeRestaurant.remoteMethod('get_bill_list', {
    accepts: [{arg: 'filter', type: 'object'}],
    returns: {arg: 'result', type: 'array', root: true},
    http: {verb: 'get'},
    description: '根据餐厅绑定号码查询账单'
  });

  ElemeRestaurant.remoteMethod('get_balance_list', {
    accepts: [{arg: 'filter', type: 'object'}],
    returns: {arg: 'result', type: 'array', root: true},
    http: {verb: 'get'},
    description: '根据餐厅绑定号码查询余额流水'
  });

  ElemeRestaurant.remoteMethod('get_by_phone', {
    accepts: [{arg: 'phone', type: 'string'}],
    returns: {arg: 'result', type: 'object', root: true},
    http: {verb: 'get'},
    description: '查询餐厅信息'
  });

  ElemeRestaurant.remoteMethod('get_restaurant_manage_tree', {
    accepts: [{arg: 'rst_id', type: 'string'}],
    returns: {arg: 'result', type: 'object', root: true},
    http: {verb: 'get'},
    description: '查询餐厅信息'
  });

  ElemeRestaurant.remoteMethod('query_city', {
    accepts: [{arg: 'filter', type: 'object'}],
    returns: {arg: 'result', type: 'array', root: true},
    http: {verb: 'get'},
    description: '查询餐厅城市列表'
  });

  ElemeRestaurant.remoteMethod('query_restaurant_newflavors_by_restaurant_id', {
    accepts: [{arg: 'rst_id', type: 'number'}],
    returns: {arg: 'result', type: 'array', root: true},
    http: {verb: 'get'},
    description: '查询餐厅类型'
  });

  ElemeRestaurant.remoteMethod('set_restaurant_status', {
    accepts: [
      {arg: 'restaurant_id', type: 'number'},
      {arg: 'status', type: 'string'},
      {arg: 'value', type: 'number'},
      {arg: 'user_id', type: 'number'},
      {arg: 'remark', type: 'string'},
      {arg: 'remind_time', type: 'string'},
      {arg: 'corp_id', type: 'number'}
    ],
    returns: {arg: 'result', type: 'object', root: true},
    http: {verb: 'get'},
    description: '设置餐厅状态'
  });

  ElemeRestaurant.remoteMethod('get_by_admin', {
    accepts: [{arg: 'user_id', type: 'number'}],
    returns: {arg: 'result', type: 'object', root: true},
    http: {verb: 'get'},
    description: '获取餐厅管理员'
  });

  ElemeRestaurant.remoteMethod('walle_get_restaurant_change_records', {
    accepts: [
      {arg: 'restaurant_id', type: 'number'},
      {arg: 'limit', type: 'number'}
    ],
    returns: {arg: 'result', type: 'array', root: true},
    http: {verb: 'get'},
    description: '获取餐厅变更纪录'
  });

  ElemeRestaurant.remoteMethod('update_restaurant', {
    accepts: [
      {arg: 'rst_id', type: 'number'},
      {arg: 'admin_user_id', type: 'number'},
      {arg: 'rst_info', type: 'object'}
    ],
    returns: {arg: 'result', type: 'object', root: true},
    http: {verb: 'get'},
    description: '修改餐厅信息'
  });

};

