const express = require('express')// John uses mvs as a common pattern in router express
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)//first slash is //! IMPORTANT, because we have the base inside router
app.use('/login', auth)


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// WE CREATED routes DIR FOR CONTAINING DYNAMIC MODULES
/*
  it includes auth and people
  auth is stands for authentication it's mainly as a login module
  instead of routing manually we require router in people, go look at it
  then, we invoke it here 
  then we copied all methods excluding login from 11 module, and changed app method to router in people.js
  then exports the router
  

  to be more cleaner, best practice is to separate methods for each module, post in one module
  get in one module, etc...
  
*/