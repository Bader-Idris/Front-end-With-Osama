//! we can literally say: middleware is everywhere in Express
// express apps are nothing but punch of middleware functions stuffed together, to make one nice express cake/dessert🎂
const express = require('express')
const app = express()

//  req => middleware => res

// const logger = (req, res, next) => {//we moved it as an entire module
//   //! it's better to have this function in a separate file
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log(method, url, time)
//   next()
// }
const logger = require('./logger')
// app.use(logger) //this makes our logger function works with all paths
//? order matters, if below / [main path] it won't be used
// app.use('/api',logger)//! this makes all under api works with this func
const authorize = require('./authorize')
// app.use([logger, authorize])//! this is how to use many functions as middleware, i think it's destructuring
//? order matters

app.get('/', logger, (req, res) => {//! we put the function in the middle
  // express supplies parameters inside the function above
  //! we must pass funcs to a next middleware [⚠️IMPORTANT⚠️], If we don't send res manually
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
// https://expressjs.com/en/4x/api.html#app.use //! to learn more about app.use()