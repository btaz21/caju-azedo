const express = require('express')
const router = express.Router()
const Food = require('../models/foods.js')
const MealPlan = require('../models/mealplans.js')
const User = require('../models/users.js')
const seed = require('../models/seed.js')


// AUTHENTICATION FUNCTION
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
  res.render('food/new.ejs',
    {
      currentUser:req.session.currentUser
    }
  )
})


// CREATE
router.post('/', isAuthenticated, (req, res) => {
  User.findByIdAndUpdate(req.session.currentUser._id, { $push: {addedFoods:req.body} }, {new:true}, (error, updatedUser) => {
    console.log(updatedUser);
    res.redirect('/foods')
  })
})



// INDEX
router.get('/', isAuthenticated, (req, res) => {
  User.findById(req.session.currentUser._id, (error, foundUser) => {
    res.render(
      'food/index.ejs',
      {
        user:foundUser,
        currentUser: req.session.currentUser
      }
    )
  })
})



// SHOW
router.get('/:id/:altid', isAuthenticated, (req, res) => {
  User.findById(req.params.id, (error, foundUser) => {
    res.render(
      'food/show.ejs',
      {
        food:foundUser.addedFoods[req.params.altid],
        currentUser:req.session.currentUser,
        index:req.params.altid,
        user:foundUser
      }
    )
  })
})


// EDIT
router.get('/:userId/:id/:altid/edit', isAuthenticated, (req, res) => {
  User.findById(req.params.userId, (error, foundUser) => {
    res.render(
      'food/edit.ejs',
      {
        food:foundUser.addedFoods[req.params.altid],
        currentUser: req.session.currentUser,
        user:foundUser,
        index:req.params.altid
      }
    )
  })
})



// UPDATE
router.put('/:userId/:id/', (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.userId, { addedFoods: req.body }, { new:true }, (error, updatedUser) => {
    console.log(updatedUser);
    console.log(error);
    res.redirect('/foods')
  })
})


// DELETE
router.delete('/:userId/:id/:altId', isAuthenticated, (req, res) => {
  User.findByIdAndUpdate(req.params.userId, { $pull: { addedFoods: { _id: req.params.id}}}, {new: true}, (error, foundUser) => {
    console.log(error);
    console.log(foundUser);
    res.redirect('/foods')
  })
})



// SEED
router.get('/seed/starterdata/fill/maybe/yes', isAuthenticated, (req, res) => {
  User.findByIdAndUpdate(req.session.currentUser, { $push: {addedFoods:seed} }, {new:true}, (error, updatedUser) => {
    console.log(updatedUser);
      res.redirect('/')
  })
  // Food.create(seed, (error, data) => {
  //   console.log(error);
  //   }
  // )

})


// ABOUT
router.get('/about/caju/app', (req, res) => {
  res.render(
    'food/about.ejs',
     {
       currentUser:req.session.currentUser
     }
   )
})







module.exports = router
