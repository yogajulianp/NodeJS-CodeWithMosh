const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validate')();

//throw new Error('Something failed during startup / ada proses gagal distar program');
// const p = Promise.reject(new Error('Something failed miserably/gagal'));
// p.then(()=> console.log('Done'));

const port = process.env.PORT || 7000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));













// { 
//     useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false,
//     }