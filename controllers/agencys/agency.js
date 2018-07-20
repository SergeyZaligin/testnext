const Agency = require('../../models/Agencys/Agency');
const District = require('../../models/Agencys/District');
const errorHandler = require('../../utils/errorHandler');

/**
 * Add agency
 * @param {*} req 
 * @param {*} res createReview
 */
module.exports.create = async function (req, res) {
    const agency = new Agency({
        name: req.body.name,
        slug: req.body.slug,
        district: req.body.district,
        
    })
    try {
        await agency.save()
        res.status(201).json(agency)
    } catch (error) {
        errorHandler(res, error)
    }
}

/**
 * Add createReview
 * @param {*} req 
 * @param {*} res 
 */
class Review {
    constructor (text){
        this.text = text;
    }
}
module.exports.createReview = async function (req, res) {

    const agencys = await Agency.findOne({
        district: req.params.id
    })

    agencys.reviews = new Review({
        text: req.body.text,
    })
    try {
        await agency.save()
        res.status(201).json(agency)
    } catch (error) {
        errorHandler(res, error)
    }
}

/**
 * Add get all getAllAgencysByDistrictId
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getAllAgencysByDistrictId = async function (req, res) {
    const agencys = await Agency.find({
        district: req.params.slug
    })

    try {
        console.log(agencys);
        res.status(201).json(agencys)
    } catch (error) {
        errorHandler(res, error)
    }
}
