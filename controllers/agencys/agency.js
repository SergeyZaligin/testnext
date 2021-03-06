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
        phone: req.body.phone,
        metro: req.body.metro,
        address: req.body.address,
        email: req.body.email,
        preview: req.body.preview,
        site: req.body.site,
        district: req.body.district,
        user: req.user.id
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
    constructor (text, user){
        this.text = text;
        this.user = user;
    }
}
module.exports.createReview = async function (req, res) {

    const agencys = await Agency.findOne({
        district: req.params.id
    });

    agencys.reviews.push(new Review(req.body.text, req.user.id));

    try {
        await agencys.save()
        res.status(201).json(agencys)
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
