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
        name: req.body.name
    })
    try {
        console.log(district);
        await district.save()
        res.status(201).json(district)
    } catch (error) {
        errorHandler(res, error)
    }
}
