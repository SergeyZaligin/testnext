const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    visible: {
        type: Boolean,
        default: 1
    },
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        required: true
    },
    sort: {
        type: Number,
        default: 1
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
},
{
  timestamps: { 
    createdAt: 'created_at', 
    updatedAt: 'updated_at' 
  }
}
)

module.exports = mongoose.model('categories', categorySchema)