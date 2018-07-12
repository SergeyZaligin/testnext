const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  preview: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('article', articleSchema)