const mongoose = require('mongoose')

const mealPlansSchema = new mongoose.Schema(
  {
    breakfast: Array,
    main: Array,
    dessert: Array,
    libations: Array
  },
  {timestamps:true}
)

module.exports = mongoose.model('Mealplan', mealPlansSchema)
