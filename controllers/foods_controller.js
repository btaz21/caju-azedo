const express = require('express')
const router = express.Router()
const Food = require('../models/foods.js')
const MealPlan = require('../models/mealplans.js')

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

// SHOW
router.get('/:id', (req, res) => {
  Food.findById(req.params.id, (error, foundFood) => {
    res.render(
      'food/show.ejs',
      {
        food:foundFood
      }
    )
  })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  Food.findById(req.params.id, (error, foundFood) => {
    res.render(
      'food/edit.ejs',
      {
        food:foundFood
      }
    )
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  Food.findByIdAndUpdate(req.params.id, req.body, (error, updatedFood) => {
    res.redirect('/foods')
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  Food.findByIdAndRemove(req.params.id, (error, deletedFood) => {
    console.log(deletedFood)
    res.redirect('/foods')
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
