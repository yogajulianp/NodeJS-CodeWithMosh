const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
// process.on('uncaughtException', (ex) => {
//     console.log('We Got An Uncaught Exception');
//     winston.error(ex.message, ex);
//     winston.exit(1);
//     }) //cara lebih simple, uncaught di atas dihapus

winston.handleExceptions(
    new winston.transports.Console({colorize: true, prettyPrint: true }),
    new winston.transports.File({filename:'uncaughtException.log'})
    );
    //yg ini tetap dipakai

// process.on('unhandleRejection', (ex) => {
//     console.log('We Got an unhandleRejection');
//     winston.error(ex.message, ex);
//     process.exit(1)
// })
//iini menjadi ini:

process.on('unhandleRejection', (ex) => {
    throw ex;
})

winston.add(winston.transports.File, {filename: 'logfile.log'});
//winston.add(winston.transports.MonngoDB, {db: 'mongodb://localhost/vidlyAuth'}) (error di winston nya)

}