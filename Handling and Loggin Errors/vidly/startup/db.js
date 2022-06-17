const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost/vidlyAuth')
    // .then(()=> console.log('Tersambung ke MongoDB'))
    // .catch(err => console.error('Tidak dapat tersambung ke MongoDB'))
    .then(() => winston.info('Tersambung ke MongoDB'))
}