// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')


// CONFIGURATION
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI;


// DATABASE
mongoose.connect(MONGODB_URI,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })


// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)


// CONTROLLERS
const foodsController = require('./controllers/foods_controller.js')
app.use('/foods', foodsController)

const mealPlansController = require('./controllers/mealplans_controller.js')
app.use('/mealplans', mealPlansController)

const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)

const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)


// ROUTES
app.get('/', (req, res) => {
  res.redirect('/foods')
})


// LISTENER
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
