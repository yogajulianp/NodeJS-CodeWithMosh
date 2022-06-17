//const asyncMiddleware = require('../middleware/async')
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {Genre, validate} = require('../models/genre');
const express = require('express');
const mongoose = require('mongoose');
const func = require('joi/lib/types/func');
const router = express.Router();

router.get('/', async (req, res) => {
  //throw new Error('Tidak bisa mengambil genre. Could not get the genre.')
  const genres = await Genre.find().sort('name');
  res.send(genres);
});

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = new Genre ({name: req.body.name}); 
  await genre.save();

  res.send(genre);
});

router.put('/:id',async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name}, {
    new: true
  });

  //const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  //genre.name = req.body.name; //karena sudah pindah propertinya ke konst genre
  res.send(genre);
});

router.delete('/:id', [auth, admin], async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre) return res.status(404).send('The genre with the given ID was not found.');

  // const index = genres.indexOf(genre);
  // genres.splice(index, 1);
  
  res.send(genre);
});

router.get('/:id', async (req, res) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  res.send(genre);
});

async function createGenre() {
  const dataMovie = new Genre({
      name : 'Sci-fi'
  });

  try {
      //await validate();
     const result = await dataMovie.save();
     console.log(result);
  }
  catch (ex) {
      for (field in ex.errors)
      console.log(ex.errors[field]);
  }
}

//createGenre()



module.exports = router;