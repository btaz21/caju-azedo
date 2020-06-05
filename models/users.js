const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {type:String, unique:true, required:true},
    password: String,
    fruit_icon: String
  },
  {timestamps:true}
)

module.exports = mongoose.model('User', userSchema)
