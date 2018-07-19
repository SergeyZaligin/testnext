const mongoose = require('mongoose')
const Schema = mongoose.Schema

const districtSchema = new Schema({
    name: {
        type: String
    },
    slug: {
        type: String,
        unique: true,
        required: true
    }
})


//module.exports = mongoose.model('citys', citySchema);
module.exports = mongoose.model('districts', districtSchema);