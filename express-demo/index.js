const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const dataMurids = require('./routes/dataMurids')
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); //default untuk manaruh semua views di folder views

//process.env.NODE_ENV
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`app: ${app.get('env')}`)  //defaul development variable if environment undifine

app.use(express.json());
app.use(express.urlencoded({extended : true})); //key=value & key = value  // req.body
app.use(express.static('public'));
app.use(helmet());
app.use('/api/dataMurids', dataMurids);
app.use('/', home);

// configuration
console.log('Aplication Name: '+ config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
//console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env')==='development') {
    app.use(morgan('tiny'));
   startupDebugger('morgan sudah enable...');
}
// Db work...
dbDebugger('menyambung ke database')

app.use(logger);

app.use(function (req, res, next){
    console.log('Authenticating...');
    next();
});

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));



// app.put()
// app.post()
// app.delete()

// callback ini disebut router handler 
//   (req,res)=>{
//  res.send('Hello World')

// app.get('/api/posts/:year/:month',(req, res)=> {
//     res.send(req.params);
// });

// app.get('/api/posts/:year/:month',(req, res)=> {
//     res.send(req.query);
// });

// const courses = [
//     {id: 1, name: 'course1'},
//     {id: 2, name: 'course2'},
//     {id: 3, name: 'course3'}
// ];



// app.get('/api/posts/:year/:month', (req, res)=> {
//     res.send(req.params);
// });

// app.get('/api/posts/:year/:month', (req, res)=> {
//     res.send(req.query);
// });

// app.get('/api/dataMurids/:id',(req, res)=> {
//     res.send(req.params.id);
// });