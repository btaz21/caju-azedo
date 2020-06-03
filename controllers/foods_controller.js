const Food = require('../models/foods.js')
const express = require('express')
const foods = express.Router()


// NEW
foods.get('/new', (req, res) => {
  res.render('food/new.ejs')
})

// CREATE
foods.post('/', (req, res) => {
  Food.create(req.body, (error, createdFood) => {
    console.log(createdFood);
    res.redirect('/foods')
  })
})















module.exports = foods
