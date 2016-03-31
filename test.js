var assert = require('assert');
var logger = require('pomelo-logger').getLogger('rpc-log');
var Q = require('q');
var uuid = require('uuid');
var _ = require('lodash');

module.exports = function (app) {
  return new PushRemote(app);
};

var PushRemote = function (app) {
  this.app = app;
  this.channelService = app.get('channelService');
  this.modelService = app.get('modelService');
};

/**
 * 向指定用户推送信息
 * @param uids
 * @param route
 * @param msg
 * @param from  消息来源
 * @param callback
 */
PushRemote.prototype.pushByUids = function (uids, route, msg, from, option, callback) {
    option = option || {};

    if (typeof option.persistence === 'undefined') {
      option.persistence = true;
    }
    
    return Q.async(function* () {
        logger.info('%s[%s]: [%s %s %s] %s => %s %s => %s %s => %s ## %s',
          'PushRemote.prototype.pushByUids.basicArgs',
          process.pid,
          this.app.get('emsAppId'),
          '-',
          uuid.v4(),
          'uids',
          uids,
          'route',
          route,
          'from',
          from,
          'msg',
          msg
        );

        var self = this;

        var channelService = self.channelService;
        var records = [],
          notifications = uids.map(function (uid) {
            return {
              uid: uid,
              route: route,
              msg: msg,
              from: from
            }
          });

        // 接收到的消息持久化
        if (option.persistence) {
          notifications = yield self.modelService.models.PushNotification.create(notifications);
        }

        // 查看在线设备
        var uds = yield self.modelService.models.UserDevice.find({
          uid: {
            $in: uids
          }
        }).exec();

        records = _.chain(uds)
          .map(function (ud) {
            return {
              uid: ud.uid,
              sid: ud.frontendId
            }
          })
          .uniq(function (record) {
            //以uid和sid为唯一标示去重
            return record.uid + record.sid;
          })
          .value();

        //在线用户大于0
        if (records.length) {
          return Q.ninvoke(channelService, 'pushMessageByUids', route, msg, records);
        } else {
          return Q(null);
        }

        //向用户推送通知
        return Q.all(notifications.map(function (notification) {
            var nftRecord = records.filter(function (record) {
              return notification.uid === record.uid;
            });
            logger.info('nftRecord: %j', nftRecord);
            if (nftRecord.length) {
              return Q.ninvoke(channelService, 'pushMessageByUids', 'onNotification', notification, nftRecord);
            } else {
              return Q(null);
            }
          }).then(function () {
            callback(null, {
              route: route
            })
          }).catch(function (err) {
            logger.info('error: %j', err);
            callback(err);
          });

        })();

    };
