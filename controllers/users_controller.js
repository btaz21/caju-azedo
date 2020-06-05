
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

router.get('/new', (req, res) => {
  console.log(req.session.currentUser);
  res.render(
    'users/new.ejs',
    {
      currentUser: req.session.currentUser
    }
  )
})

router.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (error, createdUser) => {
    console.log('user is created', createdUser);
    res.redirect('/')
  })
})

// DROP DATABASE
// DO NOT PUSH TO PRODUCTION
router.get('/dropallusers/cannotundo/areyousure/reallysure/okthen', (req, res) => {
    User.collection.drop()
    res.send('You did it! You dropped the database!')
  }
)

module.exports = router