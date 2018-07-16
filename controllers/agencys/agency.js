const Agency = require('../../models/Agencys/Agency');
const City = require('../../models/Agencys/City');
const errorHandler = require('../../utils/errorHandler');

/**
 * Add agency
 * @param {*} req 
 * @param {*} res 
 */
module.exports.create = async function (req, res) {
    const agency = new Agency({
        name: req.body.name,
        district: req.body.district,
        
    })
    try {
        await agency.save()
        res.status(201).json(agency)
    } catch (error) {
        errorHandler(res, error)
    }
}
