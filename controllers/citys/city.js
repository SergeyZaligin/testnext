const Agency = require('../../models/Agencys/Agency');
const City = require('../../models/Agencys/City');
const errorHandler = require('../../utils/errorHandler');

/**
 * Add city
 * @param {*} req 
 * @param {*} res 
 */
module.exports.create = async function (req, res) {
    const city = new City({
        name: req.body.name,
        district: [
            {
                title: req.body.title
            }
        ]
    })
    try {
        console.log(city);
        await city.save()
        res.status(201).json(city)
    } catch (error) {
        errorHandler(res, error)
    }
}
