const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res
// app.use([logger, authorize])//! we'll app middleware in route instead of use🔽
// ? and that's when we want to exclusively use it with api/items for instance
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', [logger, authorize],(req, res) => {
  //! we used app.use(express.static) as an example of 2nd option down there [express]
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
// this is a simplified approach to foot in authorizing users in applications
// needs much to be as real world, working
//! middleware allows us to structure applications as lego parts John said

// 1. user vs. route 
// 2. options - our own / express / third party

//? one of the most popular third party options is:
// npm morgan check it at //! https://www.npmjs.com/package/morgan
// it's optionally to install it, I'll do it in and call it in 10th lesson
// remember to care about dependencies in package.json instead of reuploading it