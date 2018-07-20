const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    visible: {
        type: Boolean,
        default: 1
    },
    // user: {
    //     ref: 'users',
    //     type: Schema.Types.ObjectId
    // },
    text: {
        type: String,
        required: true

    }
},
{
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
}
);

const agencySchema = new Schema({
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
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    metro: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        default: ''
    },
    imageThubnailLogo: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    sort: {
        type: Number,
        default: 1
    },
    district: {
        ref: 'districts',
        type: String,
    },
    reviews: {
        type: [reviewSchema]
    }
},
{
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
}
)

module.exports = mongoose.model('agencys',  agencySchema)