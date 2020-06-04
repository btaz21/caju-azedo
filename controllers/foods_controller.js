const Food = require('../models/foods.js')
const express = require('express')
const router = express.Router()


// NEW
router.get('/new', (req, res) => {
  res.render('food/new.ejs')
})

// CREATE
router.post('/', (req, res) => {
  Food.create(req.body, (error, createdFood) => {
    console.log(createdFood);
    res.redirect('/foods')
  })
})

// INDEX
router.get('/', (req, res) => {
  Food.find({}, (error, allFoods) => {
    res.render(
      'food/index.ejs',
      {
        foods:allFoods
      }
    )
  })
})


// SEED
// router.get('/seed', (req, res) => {
//   Food.create(
//     [
//       {}
//     ],
//     (error, data) => {
//       res.redirect('/')
//     }
//   )
// })
















module.exports = router
