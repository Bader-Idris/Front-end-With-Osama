// this is a beloved lesson, because it makes your users' data more dynamic,
//! using get, post, put and delete methods [http methods]
const express = require('express')
const app = express()
let { people } = require('./data')// we use let, because it'll be changing

// static assets
app.use(express.static('./methods-public'))
// parse form data  //! [def] => false
app.use(express.urlencoded({ extended: false }))// search here to get deeper
//?  https://expressjs.com/en/api.html#express.urlencoded 
// in v4 we don't need to install bodyParser, unlike prior versions
// parse json
app.use(express.json())// this is to handle incoming data //![middleware]

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  // to send post http, we need to install a tool, as we'll install
  // both Postman, or Insomnia || or you need to set up basically a working application
  //! notice how we built form in index.html its action='/login' and its method=POST
  //? it's appearing that action is for tended location
  // even if we initially get a 404 error after adding a value to input, we can see it as:
  // name: john, in the form data, when we click on the request [login]
  // name because we added name='name' in HTML, //? so we can change the key name
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })//201 is when post req is success
  //! instead of optionally sending body with get,
  //? we're compiled to send the entire body
  //! IT'S VERY CRUCIAL

  // 2ndly we should add middleware after user adds value to input
  // which is sent by form to our request
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
  //  so we check  request payload
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})
//! in network, header see: content-type: application/x—www—form—urlencoded
// in javascript.html we didn't add actions to from
// if you're not familiar with js fetch you can 
app.put('/api/people/:id', (req, res) => {// id here as /api/people/1 or number of ids
  // install the tool axios as John uses in javascript.html
  const { id } = req.params
  const { name } = req.body
  // console.log(id, name)// server console
  // res.send('hello world') in client body
  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {//it's important to care after id and name here
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})


//! install free tool postman from its website => [for testing purposes]
// https://postman.com download it freely
/*
  clicking on ➕ in main dashboard with add a new request
   you can choose what type of request you want, post get put delete ...
    to pick our url, we choose localhost:5000 and our normal path we created
  we'll test some approaches as =>
  localhost:5000/api/people
  it returns fast results as status, size time, AND we can test it immediately
  instead of building the whole front-end

  in post req we go to body => raw && text:json
    so we use json data as 
    {
      "name": "Bader",
      "name": "Hanady baby"
    }
*/