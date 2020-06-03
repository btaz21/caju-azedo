const mongoose = require('mongoose')

const foodsSchema = new mongoose.Schema(
  {
    name: {type:String, required:true},
    description: String,
    img: String,
    recipe: String
  },
  {timestamps: true}
)

module.exports = mongoose.model('Food', foodsSchema)
