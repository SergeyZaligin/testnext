const Category = require('../../models/Articles/Category');
const Article = require('../../models/Articles/Article');
const errorHandler = require('../../utils/errorHandler');

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


/**
 * Get all categories
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getAllCategories = async function (req, res) {

    try {
      const categories = await Category
        .find({})
      res.status(200).json({
        categories
    });
    } catch (error) {
      errorHandler(res, error);
    }
  
  }

/**
 * remove category
 * @param {*} req 
 * @param {*} res 
 */
module.exports.remove = async function (req, res) {

    try {
        await Category.remove({
            _id: req.params.id
        })
        await Article.remove({
            category: req.params.id
        })
        res.status(200).json({
            message: 'Категория удалена'
        })
    } catch (error) {
        errorHandler(res, error)
    }
  
  }

/**
 * update category
 * @param {*} req 
 * @param {*} res 
 */
  module.exports.update = async function (req, res) {

    const updated = {
        visible: req.body.visible,
        name: req.body.name,
        slug: req.body.slug,
        description: req.body.description,
        keywords: req.body.keywords,
        sort: req.body.sort,
        user: req.user.id
    }

    try {
        const category = await Category.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: updated
        }, {
            new: true
        })
        res.status(200).json(category)
    } catch (error) {
        errorHandler(res, error)
    }
}