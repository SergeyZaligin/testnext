const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({

    name: {
        type: String,
        required: true
    },

    district: [
        {
            name: {
                type: String
            }
        }
    ]
})

module.exports = mongoose.model('citys', citySchema)