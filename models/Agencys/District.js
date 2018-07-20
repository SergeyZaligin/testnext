const mongoose = require('mongoose')
const Schema = mongoose.Schema

const districtSchema = new Schema({
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
    name: {
        type: String
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    sort: {
        type: Number,
        default: 1
    },
},
{
    timestamps: { 
      createdAt: 'created_at', 
      updatedAt: 'updated_at' 
    }
}
)


//module.exports = mongoose.model('citys', citySchema);
module.exports = mongoose.model('districts', districtSchema);