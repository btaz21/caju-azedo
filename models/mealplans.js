const mongoose = require('mongoose')

const mealPlansSchema = new mongoose.Schema(
  {
    breakfast: Array,
    lunch: Array,
    dinner: Array,
    notes: Array
  },
  {timestamps:true}
)

module.exports = mongoose.model('Mealplan', mealPlansSchema)
