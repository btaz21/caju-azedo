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




// DROP DATABASE
// DO NOT PUSH TO PRODUCTION
router.get('/dropdatabase/cannotundo/areyoursure/reallysure/okthen', (req, res) => {
    MealPlan.collection.drop()
    res.send('You did it! You dropped the database!')
  }
)








module.exports = router
