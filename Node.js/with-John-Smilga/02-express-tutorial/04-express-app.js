const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))//! important
// this app.use is on behalf of all http 2 module,
//  when we called all separated modules, on their own

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
  //! join does same here instead of resolve
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
