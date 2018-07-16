const mongoose = require('mongoose')
const Schema = mongoose.Schema

const districtSchema = new Schema({
    title: {
        type: String
    }
})

const citySchema = new Schema({

    name: {
        type: String,
        required: true
    },

    district: {
        type: [districtSchema]
    }

})



module.exports = mongoose.model('citys', citySchema)
module.exports = mongoose.model('districts', districtSchema)