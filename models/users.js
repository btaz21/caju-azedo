const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {type:String, unique:true, required:true},
    password: String,
    color: String,
    name: String
  },
  {timestamps:true}
)

module.exports = mongoose.model('User', userSchema)
