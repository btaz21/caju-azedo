const express = require('express')
const router = express.Router()
const MealPlan = require('../models/mealplans.js')
const Food = require('../models/foods.js')


// NEW
router.get('/new', (req, res) => {
  Food.find({}, (error, allFoods) => {
    res.render(
      'mealplans/new.ejs',
      {
        foods:allFoods,
      }
    )
  })
})

// CREATE
router.post('/', (req, res) => {
  console.log(req.body);
  MealPlan.create(req.body, (error, createdPlan) => {
    res.redirect('/mealplans')
  })
})

// INDEX
router.get('/', (req, res) => {
  MealPlan.find({}, (error, allPlans) => {
    res.render(
      'mealplans/index.ejs',
      {
        plans:allPlans
      }
    )
  })
})

// SHOW
router.get('/:id', (req, res) => {
  MealPlan.findById(req.params.id, (error, foundPlan) => {
    res.render(
      'mealplans/show.ejs',
      {
        plan:foundPlan
      }
    )
  })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  MealPlan.findById(req.params.id, (error, foundPlan) => {
    res.render(
      'mealplans/edit.ejs',
      {
        plan:foundPlan
      }
    )
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  MealPlan.findByIdAndUpdate(req.params.id, req.params.body, (error, updatedPlan) => {
    res.redirect('/mealplans')
  })
})


// DELETE
router.delete('/', (req, res) => {
  MealPlan.findByIdAndRemove(req.body.id, (error, deletedPlan) => {
    res.redirect('/mealplans')
  })
})


// DROP DATABASE
// DO NOT PUSH TO PRODUCTION
router.get('/dropdatabase/cannotundo/areyousure/reallysure/okthen', (req, res) => {
    MealPlan.collection.drop()
    res.send('You did it! You dropped the database!')
  }
)








module.exports = router
