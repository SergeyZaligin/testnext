const mongoose = require('mongoose')
const Schema = mongoose.Schema


const articleSchema = new Schema({
  visible: {
    type: Boolean,
    default: 1
  },
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String
  },
  preview: {
    type: String
  },
  imageThubnail: {
      type: String,
      default: ''
  },
  text: {
    type: String
  }

});


// const articleSchema = new Schema({
//   visible: {
//     type: Boolean,
//     default: 0
//   },
//   title: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   slug: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   description: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   keywords: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   preview: {
//     type: String,
//     required: true
//   },
//   seoPreview: {
//     type: String,
//     required: true
//   },
//   imageThubnail: {
//       type: String,
//       default: ''
//   },
//   text: {
//     type: String,
//     required: true
//   },
//   user: {
//     ref: 'users',
//     type: Schema.Types.ObjectId
//   }
// })

module.exports = mongoose.model('article', articleSchema)