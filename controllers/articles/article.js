const Article = require('../../models/Articles/Article')
const errorHandler = require('../../utils/errorHandler')
const faker = require('faker');

/**
 * Get all articles
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getAllArticle = async function (req, res) {
    
    try {
      let perPage = 5;
      let cnt = await Article
      .find({}).count();
      let page = +req.params.page || 1;
      const articles = await Article
      .find({})
      .skip((perPage * page) - perPage)
      .limit(+perPage);
      res.status(200).json({
        articles,
        count: cnt,
        current: page,
        pages: Math.ceil(cnt / perPage)
      });
    } catch (error) {
      errorHandler(res, error);
    }
    
  }

/**
 * Get one article
 * @param {*} req 
 * @param {*} res 
 */
module.exports.getOneArticle = async function (req, res) {
  
  try {
    const article = await Article.findOne({
      _id: req.params.id
    });
    res.status(200).json(article);
  } catch (error) {
    errorHandler(res, error);
  }
  
}
  module.exports.genFakerArticles = (req, res, next) => {

    for(let i = 0; i < 30; i++) {

      const article = new Article();
      
      article.title = faker.lorem.sentences();
      article.slug = faker.lorem.slug();
      article.preview = faker.lorem.paragraph();
      article.imageThubnail = faker.random.image();
      article.text = faker.lorem.text();
      

      article.save(err => {
        if (err) { return next(err); }
        res.redirect('/');
      });
      console.log(article);
    }
  }