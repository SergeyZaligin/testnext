const mongoose = require('mongoose')
const Schema = mongoose.Schema

const agencySchema = new Schema({

    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    district: {
        ref: 'districts',
        type: String,
    }
})

module.exports = mongoose.model('agencys',  agencySchema)