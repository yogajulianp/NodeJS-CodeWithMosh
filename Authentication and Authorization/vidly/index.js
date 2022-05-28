const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR : jwtPrivateKey tidak dapat terdefinisi');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/vidlyAuth')
    .then(()=> console.log('Tersambung ke MongoDB'))
    .catch(err => console.error('Tidak dapat tersambung ke MongoDB'))


app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Listening on port ${port}...`));













// { 
//     useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false,
//     }