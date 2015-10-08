/**
 * Created by leo on 15/10/8.
 */
var express = require("express");
var log4js = require("log4js").getLogger('./log.json');
var uuid=require('uuid');
var app = express();

//log4js.configure({
//    appenders: [
//        { type: 'console', },
//        { type: 'file', filename: 'cheese.log', category: 'cheese' }
//    ]
//});

//app.use(log4js.connectLogger(log4js.getLogger("cheese"), {level: log4js.levels.INFO}));

log4js.info('hehe');
log4js.info('%s[%s]: [%s %s %s] ## %j',
    'Ccic.queryLinkRecord.err',
    process.pid,
    process.env.ems_app_id,
    '-',
    uuid.v4(),
'err');