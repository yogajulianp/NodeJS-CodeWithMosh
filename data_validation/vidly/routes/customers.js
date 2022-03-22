const {Customer, validate} = require('../models/customer')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const customers = await Customer.find().sort('name');
  res.send(customers);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer ({
      name: req.body.name,
      phone: req.body.name,
      isGold: req.body.isGold
    }); 
  customer = await customer.save();

  res.send(customer);
});

router.put('/:id',async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findByIdAndUpdate(req.params.id, 
    {
      name: req.body.name,
      isGold: req.body.isGold,
      phone:req.body.phone
    }, {new: true});

  //const customer = customers.find(c => c.id === parseInt(req.params.id));
  if (!customer) return res.status(404).send('The customer with the given ID was not found.');

  //customer.name = req.body.name; //karena sudah pindah propertinya ke konst customer
  res.send(customer);
});

router.delete('/:id', async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);

  if (!customer) return res.status(404).send('The customer with the given ID was not found.');

  // const index = customers.indexOf(customer);
  // customers.splice(index, 1);
  
  res.send(customer);
});

router.get('/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) return res.status(404).send('The customer with the given ID was not found.');
  res.send(customer);
});

async function createCustomer() {
    const dataCustomer = new Customer({
        name: 'Yoga Julian Prasutiyo  ',
        phone: '085716391665',
        isGold: true,
    });

    try {
        //await validate();
       const result = await dataCustomer.save();
       console.log(result);
    }
    catch (ex) {
        for (field in ex.errors)
        console.log(ex.errors[field]);
    }
}
createCustomer()

module.exports = router;