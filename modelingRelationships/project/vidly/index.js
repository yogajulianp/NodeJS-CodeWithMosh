const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidlyRDB')
    .then(()=> console.log('Tersambung ke MongoDB'))
    .catch(err => console.error('Tidak dapat tersambung ke MongoDB'))


app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));













// { 
//     useNewUrlParser: true , useUnifiedTopology: true, useFindAndModify: false,
//     }