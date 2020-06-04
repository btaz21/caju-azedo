// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')


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


// CONTROLLERS
const foodsController = require('./controllers/foods_controller.js')
app.use('/foods', foodsController)

const mealPlansController = require('./controllers/mealplans_controller.js')
app.use('/mealplans', mealPlansController)

// ROUTES
app.get('/', (req, res) => {
  res.redirect('/foods')
})


// LISTENER
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
