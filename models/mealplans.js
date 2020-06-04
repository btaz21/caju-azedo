const mongoose = require('mongoose')

const mealPlansSchema = new mongoose.Schema(
  {
    breakfast: String,
    lunch: String,
    dinner: String,
    dessert: String,
    libations: String,
  },
  {timestamps:true}
)

module.exports = mongoose.model('Mealplan', mealPlansSchema)
