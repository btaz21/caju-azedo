const express = require('express')
const router = express.Router()
const MealPlan = require('../models/mealplans.js')
const Food = require('../models/foods.js')
const User = require('../models/users.js')
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    return next()
  }
  else {
    res.redirect('/sessions/new')
  }
}


// NEW
router.get('/new', isAuthenticated, (req, res) => {
  Food.find({}, (error, allFoods) => {
    res.render(
      'mealplans/new.ejs',
      {
        foods:allFoods,
        currentUser: req.session.currentUser
      }
    )
  })
})

// CREATE
router.post('/', (req, res) => {
  MealPlan.create(req.body, (error, createdPlan) => {
    res.redirect('/mealplans')
  })
})

// INDEX
router.get('/', isAuthenticated, (req, res) => {
  MealPlan.find({}, (error, allPlans) => {
    res.render(
      'mealplans/index.ejs',
      {
        plans:allPlans,
        currentUser: req.session.currentUser
      }
    )
  })
})



// EDIT
router.get('/edit', (req, res) => {
  MealPlan.findById(req.params.id, (error, foundPlan) => {
    res.render(
      'mealplans/edit.ejs',
      {
        plan:foundPlan,
        currentUser: req.session.currentUser
      }
    )
  })
})


// UPDATE
router.put('/edit', (req, res) => {
  MealPlan.findByIdAndUpdate(req.body.id, req.body, (error, updatedPlan) => {
    res.redirect('/mealplans')
  })
})


// UPDATE
router.put('/note/edit', (req, res) => {
  console.log(req.body.notes);
  MealPlan.findById(req.body.id, (error, foundPlan) => {
    foundPlan.notes.push(req.body.notes)
    foundPlan.save((error, data) => {
      res.redirect('/mealplans')
      console.log(foundPlan);
      console.log(error);
    })
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
