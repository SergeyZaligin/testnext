const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
  visible: {
    type: Boolean,
    default: 1
  },
  description: {
    type: String,
    default: ''
  },
  keywords: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  preview: {
    type: String,
    default: ''
  },
  seoPreview: {
    type: String,
    default: ''
  },
  imageThubnail: {
      type: String,
      default: ''
  },
  text: {
    type: String,
    default: ''
  },
  category: {
    ref: 'categories',
    type: Schema.Types.ObjectId
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
  sort: {
    type: Number,
    default: 1
  }
},
{
  timestamps: { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  }
}
);

module.exports = mongoose.model('article', articleSchema);
