const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

router.get('/new', (req, res) => {
  res.render(
    'sessions/new.ejs',
    {
      currentUser: req.session.currentUser
    }
  )
})


router.post('/', (req, res) => {
  User.findOne({username:req.body.username}, (error, foundUser) => {
    if(error) {
      console.log(error)
      res.send('database had an issue')
    }
    else if (!foundUser) {
      req.flash('userAlert', 'Sorry, matching user not found' )
      res.redirect('/sessions/new')
      // res.send('<a href = "/">Sorry, matching user not found</a>')
    }
    else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/')
      }
      else {
        req.flash('passwordAlert', 'Sorry, password does not match')
        res.redirect('/sessions/new')
        // res.send('<a href = "/">Sorry, password does not match</a>')
      }
    }
  })
})

router.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = router
