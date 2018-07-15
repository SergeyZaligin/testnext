const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')


/**
 * Login user
 * @param {*} req 
 * @param {*} res 
 */
module.exports.login = async function(req, res) {
  const candidate = await User.findOne({
    email: req.body.email
  })

  if (candidate) {
    const passwordResult = bcryptjs.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id,
        role: candidate.role
      }, keys.secretKey, { expiresIn: 60 * 60 })
      res.status(200).json({
        token: `Bearer ${token}`,
        role: candidate.role,
        id: candidate._id
      })
    } else {
      res.status(401).json({
        message: 'Логин или пароль не совпадают'
      })
    }
  } else {
    res.status(404).json({
      message: 'Пользователь не зарегистрирован'
    })
  }
}

/**
 * Registration users
 * @param {*} req 
 * @param {*} res 
 */
module.exports.register = async function(req, res) {

  const candidate = await User.findOne({
    email: req.body.email
  })

  if (candidate) {
    res.status(409).json({
      message: 'Такой email уже занят'
    })
  } else {
    const salt = bcryptjs.genSaltSync(10)
    const password = req.body.password
    const token = jwt.sign({
      email: req.body.email
    }, keys.secretKey, { expiresIn: 60 * 60 })
    const user = new User({
      email: req.body.email,
      password: bcryptjs.hashSync(password, salt),
      role: 'register'
    })

    try {
      await user.save()
      res.status(201).json({
        token: `Bearer ${token}`,
        role: user.role
      })
    } catch (error) {
      errorHandler(res, error)
    }
    
  }
}