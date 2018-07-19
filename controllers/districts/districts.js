const Agency = require('../../models/Agencys/Agency');
const District = require('../../models/Agencys/District');
const errorHandler = require('../../utils/errorHandler');

/**
 * Add district
 * @param {*} req 
 * @param {*} res 
 */
module.exports.create = async function (req, res) {
    const district = new District({
        name: req.body.name,
        slug: req.body.slug
    })
    try {
        console.log(district);
        await district.save()
        res.status(201).json(district)
    } catch (error) {
        errorHandler(res, error)
    }
}

/**
 * Add get all district
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getAllDistricts = async function (req, res) {
    const districts = await District.find({})

    try {
        console.log(districts);
        res.status(201).json(districts)
    } catch (error) {
        errorHandler(res, error)
    }
}