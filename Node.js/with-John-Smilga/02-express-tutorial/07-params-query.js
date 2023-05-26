const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
    // this approach is awesome to reduce expenses
    //! compare it to 06 module
  })

  res.json(newProducts)
})
//this : is called rout parameter, and productID is a placeholder
// and this approach is better than requesting each id manually
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)// here we get any id number
    // if string we don't need to include inside Number method
  )
  if (!singleProduct) {//meaning if not existing, or undefined
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})
//! this is to show that rout can be more complex
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)// this is how to see url-bar value provided
  const { search, limit } = req.query// these are if user has 2 specific vars
  // it responses to server, as search, limit object keys
  let sortedProducts = [...products]

  if (search) {// if we make it search=a it returns only obj has names starting with a
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
      //? always use return inside responding conditions
    })
  }
  if (limit) {// this is for the length of array from products
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ success: true, data: [] })// more common than commented
    // if we don't return it, server will throw an error
    //! we cannot send two responses in the same request
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
// check this: hacker news algolia api