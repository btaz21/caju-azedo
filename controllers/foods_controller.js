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
  User.findByIdAndUpdate(req.session.currentUser._id, {addedFoods:req.body}, {new:true}, (error, updatedUser) => {
    console.log(updatedUser);
    res.redirect('/foods')
  })
})

  // Food.create(req.body, (error, createdFood) => {
  //   console.log(createdFood);
  //   res.redirect('/foods')
  // })



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

  // Food.find({}, (error, allFoods) => {
  //   res.render(
  //     'food/index.ejs',
  //     {
  //       foods:allFoods,
  //       currentUser: req.session.currentUser
  //     }
  //   )
  // })



// SHOW
router.get('/:id/:altid', isAuthenticated, (req, res) => {
  console.log(req.params.id);
  console.log(req.params.altid);
  User.findById(req.params.id, (error, foundUser) => {
    console.log(foundUser);
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

  // Food.findById(req.params.id, (error, foundFood) => {
  //   res.render(
  //     'food/show.ejs',
  //     {
  //       food:foundFood,
  //       currentUser: req.session.currentUser
  //     }
  //   )
  // })
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


  // Food.findById(req.params.id, (error, foundFood) => {
  //   res.render(
  //     'food/edit.ejs',
  //     {
  //       food:foundFood,
  //       currentUser: req.session.currentUser
  //     }
  //   )
  // })


// UPDATE
router.put('/:userId/:id/', (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.userId, { addedFoods: req.body }, { new:true }, (error, updatedUser) => {
    console.log(updatedUser);
    console.log(error);
    res.redirect('/foods')
  })
})

//   Food.findByIdAndUpdate(req.params.id, req.body, (error, updatedFood) => {
//     res.redirect('/foods')
//   })
// })


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
