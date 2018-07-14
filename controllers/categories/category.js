const Category = require('../../models/Articles/Category')
const errorHandler = require('../../utils/errorHandler')

/**
 * Add category
 * @param {*} req 
 * @param {*} res 
 */
module.exports.create = async function (req, res) {
    const category = new Category({
        visible: req.body.visible,
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
        keywords: req.body.keywords,
        sort: req.body.sort,
        user: req.user.id
    })
    try {
        await category.save()
        res.status(201).json(category)
    } catch (error) {
        errorHandler(res, error)
    }
}
