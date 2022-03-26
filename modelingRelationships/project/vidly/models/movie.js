const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre')

const Movie = mongoose.model('Movies', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 300
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 300
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 300
    },
}));

function validateMovie(movie) {
    const schema = {
        title: Joi.string().min(5).max(50).require(),
        genreId: Joi.objectId().require(),
        numberInStock: Joi.number().min(0).require(),
        dailyRentalRate: Joi.number().min(0).require(),
    }

    return Joi.validate(movie, schema)
}

exports.Movie = Movie;
exports.validate = validateMovie;