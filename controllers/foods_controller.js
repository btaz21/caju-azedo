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
  Food.create(req.body, (error, createdFood) => {
    console.log(createdFood);
    res.redirect('/foods')
  })
})



// const userID = req.session.currentUser._id
// User.findById(userID, (error, foundUser) => {
//   foundUser.addedFoods.push(req.body)
//   foundUser.save((error, data) => {
//     res.redirect('/foods')
//     console.log(foundUser);
//   })
// })



// INDEX
router.get('/', (req, res) => {
  Food.find({}, (error, allFoods) => {
    res.render(
      'food/index.ejs',
      {
        foods:allFoods,
        currentUser: req.session.currentUser
      }
    )
  })
})

// User.findById(req.session.currentUser._id, (error, foundUser) => {
//   res.render(
//     'food/index.ejs',
//     {
//       user:foundUser,
//       currentUser: req.session.currentUser
//     }
//   )
// })

// SHOW
router.get('/:id', isAuthenticated, (req, res) => {
  Food.findById(req.params.id, (error, foundFood) => {
    res.render(
      'food/show.ejs',
      {
        food:foundFood,
        currentUser: req.session.currentUser
      }
    )
  })
})

// EDIT
router.get('/:id/edit', isAuthenticated, (req, res) => {
  Food.findById(req.params.id, (error, foundFood) => {
    res.render(
      'food/edit.ejs',
      {
        food:foundFood,
        currentUser: req.session.currentUser
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
router.delete('/:id', isAuthenticated, (req, res) => {
  Food.findByIdAndRemove(req.params.id, (error, deletedFood) => {
    console.log(deletedFood)
    res.redirect('/foods')
  })
})


// SEED
router.get('/seed/starterdata', isAuthenticated, (req, res) => {
  Food.create(seed, (error, data) => {
    res.redirect('/')
    }
  )
})

// ABOUT
router.get('/about/caju', (req, res) => {
  res.render(
    'food/about.ejs',
     {
       currentUser:req.session.currentUser
     }
   )
})







module.exports = router
