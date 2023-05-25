const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {//can change path / to sth longer
  res.json(products)//when we request it, its type os application/json
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
