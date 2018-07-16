const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({

    name: {
        type: String,
        required: true
    },

    district: {
        type: [districtSchema]
    }

})

const districtSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('citys', citySchema)
module.exports = mongoose.model('districts', districtSchema)