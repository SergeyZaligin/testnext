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
        visible: req.body.visible,
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
        keywords: req.body.keywords,
        sort: req.body.sort,
        user: req.user.id
    })
    try {
        await city.save()
        res.status(201).json(city)
    } catch (error) {
        errorHandler(res, error)
    }
}
