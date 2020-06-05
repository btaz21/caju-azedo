
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

router.get('/new', (req, res) => {
  res.render(
    'sessions/new.ejs',
    {
      currentUser: req.sessions.currentUser
    }
  )
})


module.exports = router
