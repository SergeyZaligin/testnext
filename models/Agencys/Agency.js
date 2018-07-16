const mongoose = require('mongoose')
const Schema = mongoose.Schema

const agencySchema = new Schema({

    name: {
        type: String,
        required: true
    },

    district: {
        ref: 'districts',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('agencys',  agencySchema)