const express = require('express')
const app = express()
//! you need to install express, John uses 4.17 version
// to install type: //! npm install express --save
// [--save] is optionally, only mandatory for earlier node versions
// to install tended version as 4.17 do this://! npm install express@4.17.1 --save

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete //! 🔼 4 are represented from HTML types, awesome
// app.all //? this includes them all
// app.use //! this is crucial in Express
// app.listen
