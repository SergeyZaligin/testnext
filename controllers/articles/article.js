const Article = require('../../models/Articles/Article')
const errorHandler = require('../../utils/errorHandler')

/**
 * Get all articles
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getAllArticle = async function (req, res) {
    const articles = await Article.findOne({
      email: req.body.email
    })
  
    if (articles) {
      
    } else {
     
    }

  }