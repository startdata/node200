const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');

function tsFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

const logger = new (winston.logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            showlevel: true,
            level: 'debug',
        }),
        new (winstonDaily)({

            level: 'info',
            filename: 'Log/logs',
            timestamp: tsFormat,
            datePattern: '_yyyy-mm-dd.log',
            showlevel: true,
            maxsize: 10000000,
            maxFiles: 5,
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            level: 'info',
            filename: 'Log/exception',
            timestamp: tsFormat,
            datePattern: '_yyyy-mm-dd.log',
            showlevel: true,
            maxsize: 10000000,
            maxFiles: 5
        }),
        new(winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            showlevel: true,
            level: 'debug',
        }),
    ],
});

logger.info('info logging');
logger.error('error logging');