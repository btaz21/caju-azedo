const mongoose = require('mongoose')
const mealPlans = require('./mealplans.js')
const foods = require('./foods.js')

const userSchema = new mongoose.Schema(
  {
    username: {type:String, unique:true, required:true},
    password: String,
    color: String,
    name: String,
    addedFoods: [],
    addedPlans: [mealPlans.schema]
  },
  {timestamps:true}
)

module.exports = mongoose.model('User', userSchema)
