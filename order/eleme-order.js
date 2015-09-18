var Q = require('q');
var _ = require('lodash');
var moment = require('moment');
var eos_types = require('../../gen-nodejs/eos_types');
var logger = require('log4js').getLogger('ElemeOrder');
var JSONbig = require('json-bigint');
var Int64 = require('node-int64');
var bignum = require('bignum');
var crypto = require('crypto');
var http = require('http');
var request = require('request');
var url = require('url');
var uuid = require('uuid');

module.exports = function (ElemeOrder) {

  ElemeOrder.mock_search_order = function (filter, callback) {

    return Q(
      _.times(30, function () {
        var create_at = moment().add(-1 * _.random(1, 15), 'd');
        return {
          unique_id: '11111111111111111111',
          "id": _.uniqueId(),
          "restaurant_number": _.uniqueId(),
          "created_at": create_at,
          "deliver_time": create_at.add(1, 'h'),
          "active_at": create_at.add(1, 'm'),
          "status_code": _.random(-5, 3),
          "address": "我是一个地址，一个地址，一个地址",
          "order_label": {
            "order_from": _.random(0, 10),
            "order_mode": _.random(1, 10),
            "order_rating": _.random(0, 2),
            "is_book": _.random(0, 1),
            "is_online_paid": _.random(0, 1)
          },

          "restaurant": {
            "name": '我是餐厅name',
            "id": _.uniqueId(),
            "phone": '餐厅手机号',
            "name_for_url": 'sss://sdfasdfasf',
            "address_text": ""
          },
          "description": "",
          "invoice": "",
          "orderItem": [
            {
              "name": '黄焖鸡米饭',
              "quantity": 1,
              "price": 10
            },
            {
              "name": '糖醋排骨',
              "quantity": 1,
              "price": 5
            }
          ],
          "deliverFee": 1,
          "food_activity": [
            {
              "id": _.uniqueId('fa'),
              "name": '我是美食活动',
              price: 20,
            },
            {
              "id": _.uniqueId('fa'),
              "name": '我是美食活动',
              price: 20,
            }
          ],
          "rst_activity": [
            {
              "id": _.uniqueId('fa'),
              "name": '我是美食活动',
              price: 20,
            },
            {
              "id": _.uniqueId('fa'),
              "name": '我是美食活动',
              price: 20,
            }
          ],
          "payInfo": {
            "total": 10,
            "discount_amount": 1,
            "price": 9
          }
        }
      }).sort(function (item) {
        return item.create_at;
      })
    ).nodeify(callback);

  };

  ElemeOrder.mock_get_order_third_party_info = function (filter) {
    return Q.delay({source: '开放平台京东'}, 200);
  };

  ElemeOrder.observe('before search_order', function (ctx, next) {
    if(ctx.args[0].where.must && ctx.args[0].where.must.restaurant_mobile !== undefined){
      ElemeOrder.app.models.ElemeRestaurant.get_rst_id(ctx.args[0].where.must.restaurant_mobile)
        .then(function (data) {
          ctx.args[0].where.must.restaurant_id = data.id;
          delete ctx.args[0].where.must.restaurant_mobile;
          ctx.args[0] = JSON.stringify(ctx.args[0]);
          next();
        })
        .catch(function (err) {
          next(err);
        });
    } else {
      ctx.args[0] = JSON.stringify(ctx.args[0]);
      next();
    }
  });

  ElemeOrder.observe('after search_order', function (ctx, next) {
    if (ctx.result) {
      ctx.result = JSON.parse(ctx.result);

      var rst_id = ctx.result[0].restaurant.id;

      ElemeOrder.app.models.ElemeRestaurant.get(rst_id)
        .then(function (rst_info) {
          var rst_mobile = rst_info.mobile;
          console.log(rst_mobile);
          ctx.result[0].restaurant.mobile = rst_mobile;
          next();
        })
        .catch(function (err) {
          ctx.result[0].restaurant.mobile = 'err';
          next();
        })

    } else {
      next();
    }
  });

  ElemeOrder.observe('before query_order_invalid_description', function (ctx, next) {
    ctx.args[0] = new Int64(bignum(ctx.args[0]).toBuffer({size: 8}));
    next();
  });

  ElemeOrder.observe('before query_process_record', function (ctx, next) {
    ctx.args[0] = new Int64(bignum(ctx.args[0]).toBuffer({size: 8}));
    next();
  });

  ElemeOrder.observe('after query_process_record', function (ctx, next) {
    if (ctx.result) {
      Q.all(ctx.result.map(function (record) {
        if (record.user_id === -1) {
          record.user = {};
          return record;
        } else {
          return ElemeOrder.app.models.ElemeUser.get(record.user_id)
            .then(function (user) {
              record.user = user;
              return record;
            })
        }
      })).then(function (recordList) {
        ctx.result = recordList;
        next();
      }).catch(function (err) {
        next(err);
      })
    } else {
      next();
    }
  });

  ElemeOrder.observe('before query_order_timeline_record', function (ctx, next) {
    ctx.args[0] = new Int64(bignum(ctx.args[0]).toBuffer({size: 8}));
    next();
  });

  ElemeOrder.observe('before get_order_third_party_info', function (ctx, next) {
    ctx.args[0] = [new Int64(bignum(ctx.args[0]).toBuffer({size: 8}))];
    next();
  });

  ElemeOrder.observe('before eleme_process_order', function (ctx, next) {
    ctx.args[0] = [new Int64(bignum(ctx.args[0]).toBuffer({size: 8}))];
    next();
  });

  ElemeOrder.observe('before force_invalid_order', function (ctx, next) {
    ctx.args[0] = [new Int64(bignum(ctx.args[0]).toBuffer({size: 8}))];
    next();
  });

  ElemeOrder.observe('after query_order_timeline_record', function (ctx, next) {
    var ElemeUser = ElemeOrder.app.models.ElemeUser;
    if (ctx.result) {
      Q.all(ctx.result.map(function (record) {
        return ElemeUser.get_full(record.user_id)
          .then(function (full) {
            record.user = full.user;
            record.profile = full.profile;
            return record;
          })
          .catch(function () {
            return record;
          })
      })).then(function (result) {
        ctx.result = result;
        next();
      })
    } else {
      next()
    }
  });

  ElemeOrder.observe('after get_order_third_party_info', function (ctx, next) {
    if (ctx.result) {
      ctx.result = {source: ctx.result[new Int64(bignum(ctx.args[0]).toBuffer({size: 8}))]};
      next();
    } else {
      next()
    }
  });

  /**
   * 查询订单物流信息
   * @param order_id
   * @returns {*|promise}
   */
  ElemeOrder.tracking_info = function (order_id) {
    var deferred = Q.defer();
    var api = "/trackingInfo/" + order_id;
    var auth_key = process.env.tracking_info_auth_key;
    var request_time = Date.now().toString().substr(0, 10);
    var seed = 'GET' + api + 'authKey=' + auth_key + 'requestTime=' + request_time + process.env.tracking_info_secret_key;
    var requestSignature = crypto.createHash('md5').update(seed).digest('hex');
    logger.info('%s %s[%s]: [%s %s %s] %s => %s ## %j',
      'info',
      'ElemeOrder.tracking_info.request',
      process.pid,
      process.env.ems_app_id,
      '-',
      uuid.v4(),
      'tracking_info_url',
      process.env.tracking_info_url + api,
      {
        authKey: auth_key,
        requestTime: request_time,
        requestSignature: requestSignature
      });
    request({
      uri: process.env.tracking_info_url + api,
      qs: {
        authKey: auth_key,
        requestTime: request_time,
        requestSignature: requestSignature
      }
    }, function (err, response, body) {
      if (err) {
        deferred.reject(err);
      } else if (body) {
        logger.info('%s %s[%s]: [%s %s %s] ## %j',
          'info',
          'ElemeOrder.tracking_info.raw_response',
          process.pid,
          process.env.ems_app_id,
          '-',
          uuid.v4(),
          body);
        try {
          body = JSONbig.parse(body);
          if(body.status === 'SUCCESS' && body.data){
            deferred.resolve(body.data);
          } else if(body.status === 'ERROR'){
            deferred.reject(new Error(body.message));
          } else {
            deferred.reject(new Error('undefined status'));
          }
        } catch (e) {
          deferred.reject(e);
        }
      } else {
        deferred.reject(new Error('no tracking info!'));
      }
    });

    return deferred.promise;
  };

  /**
   * 查询订单物流信息v1
   * 暂时不用,hehhe
   * @param order_id
   * @returns {*|promise}
   */
  ElemeOrder.tracking_info_v1 = function (order_id) {
    var deferred = Q.defer();
    var api = "/v1/trackingInfo/" + order_id;
    var auth_key = process.env.tracking_info_auth_key;
    var request_time = Date.now().toString().substr(0, 10);
    var seed = 'GET' + api + 'authKey=' + auth_key + 'requestTime=' + request_time + process.env.tracking_info_secret_key;
    var requestSignature = crypto.createHash('md5').update(seed).digest('hex');
    logger.info('request: %s, %j', process.env.tracking_info_url + api, {
      authKey: auth_key,
      requestTime: request_time,
      requestSignature: requestSignature
    });
    request({
      uri: process.env.tracking_info_url + api,
      qs: {
        authKey: auth_key,
        requestTime: request_time,
        requestSignature: requestSignature
      }
    }, function (err, response, body) {
      if (err) {
        deferred.reject(err);
      } else if (body) {
        logger.info('raw response:%j', body);
        try {
          if(body.status === 'SUCCESS' && body.data){
            body = JSONbig.parse(body);
            deferred.resolve(body.data);
          } else if(body.status === 'ERROR'){
            deferred.reject(new Error(body.message));
          } else {
            deferred.reject(new Error('no tracking info!'));
          }
        } catch (e) {
          deferred.reject(e);
        }
      } else {
        deferred.reject(new Error('no tracking info!'));
      }
    });

    return deferred.promise;
  };

  ElemeOrder.reminder_by_sms = function (receivers, message) {
    var app = ElemeOrder.app;
    return app.models.Hermes.create_task({
      receivers: receivers,
      message: message,
      need_reply: false,
      retry_count: 1
    });
  };

  ElemeOrder.find_by_id = function (id) {
    return ElemeOrder.search_order({
      where: {
        must: {
          id: id
        }
      },
      size: 1
    }).then(function (orders) {
      if (orders.length > 0) {
        return orders[0];
      } else {
        return null;
      }
    })
  };

  //<editor-fold desc="remote method">
  ElemeOrder.remoteMethod(
    'search_order',
    {
      accepts: [
        {arg: 'filter', type: 'object'}
      ],
      returns: {arg: 'result', type: 'array', root: true},
      http: {verb: 'get'}
    }
  );

  ElemeOrder.remoteMethod(
    'mock_search_order',
    {
      accepts: [{arg: 'filter', type: 'object'}],
      returns: {arg: 'result', type: 'array', root: true},
      http: {verb: 'get'}
    }
  );

  ElemeOrder.remoteMethod(
    'tracking_info',
    {
      accepts: [{arg: 'order_id', type: 'string'}],
      returns: {arg: 'result', type: 'object', root: true},
      http: {verb: 'get'}
    }
  );

  ElemeOrder.remoteMethod(
    'reminder_by_sms',
    {
      accepts: [
        {arg: 'receivers', type: 'string', required: true},
        {arg: 'message', type: 'string', required: true}
      ],
      returns: {arg: 'result', type: 'object', root: true},
      http: {verb: 'post'}
    }
  );

  ElemeOrder.remoteMethod(
    'find_by_id',
    {
      accepts: [
        {arg: 'id', type: 'string', required: true}
      ],
      returns: {arg: 'order', type: 'object', root: true},
      http: {verb: 'get'}
    }
  );

  ElemeOrder.remoteMethod(
    'query_order_invalid_description',
    {
      accepts: [
        {arg: 'order_id', type: 'string', required: true}
      ],
      returns: {arg: 'order', type: 'object', root: true},
      http: {verb: 'get'},
      description: '查询用户无效订单'
    }
  );


  ElemeOrder.remoteMethod(
    'query_order_timeline_record',
    {
      accepts: [
        {arg: 'order_id', type: 'string', required: true}
      ],
      returns: {arg: 'record', type: 'array', root: true},
      http: {verb: 'get'},
      description: '订单处理记录按时间轴查看'
    }
  );

  ElemeOrder.remoteMethod(
    'mock_get_order_third_party_info',
    {
      accepts: [
        {arg: 'order_id', type: 'string', required: true}
      ],
      returns: {arg: 'result', type: 'object', root: true},
      http: {verb: 'get'},
      description: '订单物流第三方来源'
    }
  );

  ElemeOrder.remoteMethod(
    'get_order_third_party_info',
    {
      accepts: [
        {arg: 'order_id', type: 'string', required: true}
      ],
      returns: {arg: 'result', type: 'object', root: true},
      http: {verb: 'get'},
      description: '订单物流第三方来源'
    }
  );

  ElemeOrder.remoteMethod(
    'eleme_process_order',
    {
      accepts: [
        {arg: 'order_id', type: 'string', required: true},
        {arg: 'to_status', type: 'number', required: true},
        {arg: 'user_id', type: 'number', required: true},
        {arg: 'process_group', type: 'number', required: true},
        {arg: 'remark', type: 'string', required: true},
        {arg: 'type_code', type: 'number', required: true},
      ],
      returns: {arg: 'result', type: 'object', root: true},
      http: {verb: 'get'},
      description: '操作订单'
    }
  );

  ElemeOrder.remoteMethod(
    'force_invalid_order',
    {
      accepts: [
        {arg: 'order_id', type: 'string', required: true},
        {arg: 'user_id', type: 'number', required: true},
        {arg: 'password', type: 'string', required: true}
      ],
      returns: {arg: 'result', type: 'object', root: true},
      http: {verb: 'get'},
      description: '强制无效'
    }
  );

  ElemeOrder.remoteMethod(
    'refund_approve_by_admin',
    {
      accepts: [
        {arg: 'user_id', type: 'number', required: true},
        {arg: 'unique_id', type: 'string', required: true},
        {arg: 'content', type: 'string', required: true}
      ],
      returns: {arg: 'result', type: 'object', root: true},
      http: {verb: 'get'},
      description: '同意退单'
    }
  );

  ElemeOrder.remoteMethod(
    'refund_overrule_by_admin',
    {
      accepts: [
        {arg: 'user_id', type: 'number', required: true},
        {arg: 'unique_id', type: 'string', required: true},
        {arg: 'content', type: 'string', required: true}
      ],
      returns: {arg: 'result', type: 'object', root: true},
      http: {verb: 'get'},
      description: '拒绝退单'
    }
  );

  //</editor-fold>

};
