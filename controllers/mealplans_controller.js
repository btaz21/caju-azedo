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
  User.findById(req.session.currentUser._id, (error, foundUser) => {
    res.render(
      'mealplans/new.ejs',
      {
        currentUser: req.session.currentUser,
        foods: foundUser.addedFoods
      }
    )
  })
})



// CREATE
router.post('/', (req, res) => {
  User.findByIdAndUpdate(req.session.currentUser._id, { $push: {addedPlans:req.body} }, {new:true}, (error, updatedUser) => {
    console.log(updatedUser);
    res.redirect('/mealplans')
  })
})




// INDEX
router.get('/', isAuthenticated, (req, res) => {
  User.findById(req.session.currentUser._id, (error, foundUser) => {
    res.render(
      'mealplans/index.ejs',
      {
        plans:foundUser.addedPlans,
        currentUser: req.session.currentUser
      }
    )
  })
})



// EDIT
router.get('/:id/:index/edit', isAuthenticated, (req, res) => {
  User.findById(req.session.currentUser._id, (error, foundUser) => {
    console.log(foundUser.addedPlans[req.params.index]);
    res.render(
      'mealplans/edit.ejs',
      {
        plan:foundUser.addedPlans[req.params.index],
        foods:foundUser.addedFoods,
        index: req.params.index,
        currentUser: req.session.currentUser
      }
    )
  })
})


// UPDATE
router.put('/note/quick/:index/edit', isAuthenticated, (req, res) => {
  User.findById(req.session.currentUser._id, (error, foundUser) => {
    foundUser.addedPlans[req.params.index].notes.push(req.body.notes)
    foundUser.save((error, data) => {
      res.redirect('/mealplans')
    })
  })
})



// UPDATE
router.put('/:id/:index', isAuthenticated, (req, res) => {
  User.findById(req.session.currentUser._id, (error, foundUser) => {
    foundUser.addedPlans[req.params.index] = req.body
    foundUser.save((error, data) => {
      res.redirect('/mealplans')
    })
  })
})


// DELETE
router.delete('/:planId', isAuthenticated, (req, res) => {
  User.findByIdAndUpdate(req.session.currentUser._id, { $pull: { addedPlans: { _id: req.params.planId}}}, {new: true}, (error, foundUser) => {
    console.log(error);
    console.log(foundUser);
    res.redirect('/mealplans')
  })
})








module.exports = router
