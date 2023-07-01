// check username, password in post(login) request
// if exist create new JWT
// send back to front-end
// setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
  //! no need to set up try&catch here because of we Installed "express-async-errors"
  const { username, password } = req.body
  //! we have three options when accessing front-end req which is uname&Passwd
  // mongoose validation => as in 3rd Proj->model->Task required fields
  // Joi => //? additional layer validation joi is a package to handle this, used later
  // check in the controller

  if (!username || !password) {//! this's our controller checker->3rd option
    throw new BadRequestError('Please provide email and password')
  }

  //just for demo, normally provided by DB!!!!
  const id = new Date().getDate()//! because of the lack of model->DB

  // try to keep payload small, better experience for user
  //? just for demo, in production use long, complex and unguessable string value!!!!!!!!!
  //! John means the variable: JWT_SECRET 🔽
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })//! we only provide what's inside .sign({}) to users when accessing our JWT

  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {//! this is where to share secret/authorized data
  const luckyNumber = Math.floor(Math.random() * 100)//look at readme.md=> 45-80 to see 
  // what do we set before putting this luckyNumber dynamically
  // and instead o f req.user.username down, we add decoded.username
  //? instead of upper comment, John sent repeated code into auth middleware
  //? because in real world we'll use 'em in many routes

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  })
}

module.exports = {
  login,
  dashboard,
}
