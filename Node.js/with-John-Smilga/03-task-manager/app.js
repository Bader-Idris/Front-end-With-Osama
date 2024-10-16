const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);//this is where we change our error as custom response
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();


//! at the introduction of 1st project John spoke about the importance of
//  persisting data and performing all CRUD operations which stands for
//? create, read, update, and delete
//  which is fundamental to any application

//?here is how it'll look like
// app.get('/api/v1/tasks')        - get all the tasks
// app.post('/api/v1/tasks')       - create a new task
// app.get('/api/v1/tasks/:id')    - get single task
// app.patch('/api/v1/tasks/:id')  - update task [instead of put]
// app.delete('/api/v1/tasks/:id') - delete task

//! John said: https://hn.algolia.com/api or any similar is good for inspiring about path and routes
// especially versions and how it's grateful setting up v1, v2 if it has enormous updating
// it's a convention, and he'll cover it in future

// setting up router and controllers is crucial, at the begging

//  John said: testing methods initially is critical to 
// not waste way more time by encountering many unnecessary bugs
// which means, to create app.get | post | patch | delete in controllers dir, and connect them in routes
// testing them using postman, with making every method res.send('some text') after naming each method

//? in postman, create a collection to structure many projects.
/* 
  initially, change its name
  we make url global instead of typing //! localhost:5000/api/v1
  there are many ways to do it, one way is to set up the environment by clicking on [eye && document]
  same as global, then we get any variableName, and making initial value as our URL
  to access our variables we use //! {{VArName}}/subPath
*/

/*
  REST API: stands for
  representational state transfer, it's the most popular api pattern
  as we used it: / and /:id and our http methods, GET etc...
  ? it combines http verbs, route paths, and our resources[aka: data]
  ! you're not compiled to use REST, but YOU SHOULD STICK WITH pattern you choose
*/

/*
  - MongoDB
  --- No SQL, non relational DB
  --- Store JSON
  --- Easy To Get Started
  --- Free cloud hosting - ATLAS //! [ Official Option ]
  ? instead of tables => collections [group of items]
  ? instead of rows => documents [single item]
  documents are set of key value pairs

  Search for Create MongoDB atlas, or access it through:
  https://docs.atlas.mongodb.com
  it's extremely expensive, but there's a free learning option

  after creating your account, go to security section => Database Access
  ? to check who can access your DB
  ! make privileges as rwx as an admin of course

  then check Network Access => add IP Address //? [ cluster privileges ]
  then check our connection stream => //? data storage => Clusters => connect
  then we put the plain text in db dir => connect.js as var = connectionString
  
  John deploys his projects to 🔴 heroku 🔴 as full stack PROJECTS
  once we deploy it, we will need to use access from anywhere option
  ! up 2 lines are specific to heroku
  https://www.digitalocean.com/ is another option
  if locally, we should move ip address from local to PRODUCTION


  then we access our collections
  John created a dummy one as{databaseName: store, collectionName:products}
  ! we're ready to create documents now ... [as tables]
  it's very basic to modify documents in mongodb
*/

/*
  after we finished mongodb intro we'll add mongoose.js framework
  go to https://mongoosejs.com/ to access its site
  we can require it as mongodb but best approach is to use mongoose instead
  ? this framework is an object data modeling library
  it's usage reason is as express, faster development process

  to install mongoDB framework we command: //todo: npm install mongoose@5.13.15
  if version is 6 or higher, apis might be different!!//! @5.13.15 is optional version, to not add latest
  so we can utilize mongoose's docs or stick to 5.XX version

  he doesn't stringify connectDB method in its module: connect.js, 
  because we don't want to server to work without a DB, so John invokes it here by using start method
  
  ! instead of using connectionString, which is open API, we put it in .env file
  ? so we install a package named: "dotenv" in our package.json
  it's important to add .env in .gitignore to not upload it
  ? it's best practice to even add package.json to .gitignore

  John adds .env in root directory
  then we require it here, and npm install dotenv, if not already
  ? to access .env module we type following: process.env.VAR_NAME

  to add new data we created models/Task //! ▶️ MVC design pattern: model => DB
  using schema will set up the structure for all the documents
  that we'll have in our collection
  task schema will be as tables in postgreSQL

  you can search for models and schemas in mongoose website
  when we add validators in Task schema, and outlaw it, we'll have an error
  or it's still hanging, not coming to res, and sticking in req. error msg will be

  Todo: learn more about validation, here: https://mongoosejs.com/docs/validation

  ? unhandled promise rejection
  ! it's caused in createTask func in controller
  ? John wasn't using asyncWrapper function to fix it, when it was Thrown
  to fix it: easily use try & catch condition, John will use the middleware next(error) in future


  put that code in try, and make catch as res.status(500) it's a general server error
  but it's lengthy, so to make it shorter we wait for rest of project🤓😲

  to check other CRUD operations, after seeing model.create go to: [🔴 search for 🔴]
  http://mongoosejs.com/docs/queries.html
*/

/* validation catch
  ! important to not stop server when user sends non-existing object
  it's a good practice to make status(404) in try when not having single task in getTask method,
    as if (!task) return res.status(404).json({msg: 'Task not found'}); 
    and simultaneously adding catch(err) res.status(500).json({msg: err});
  ? update[put/patch] task is a bit more complicated that delete one, so it'll be after it

  go to express site => search for: [error] => [default error] to improve 500 error status
  todo: https://expressjs.com/en/guide/error-handling.html#the-default-error-handler
  ! it's so powerful using next(), because of its built-in error handler
  even if you don't add a costume error, and only using next() its built-in will pass the bug
  it's the same reason we use next(error) inside middleware => async module

  instead of seeing the long default error, by using:
  res.status(500).json({msg:error}), make it as this
  ! ({msg:`costume error`})
  ?make sure you've used error parameter as in try&catch or in express error handler

  deployment:
  ? it's a high risk deploying this this project th because of not setting good validation
  but in future we'll be setting it in .env file, as you can see above [although it's a different scenario]
  ! const port = process.env.PORT || 5000;

  to test it out in localhost do this
  stop the server => type: PORT=ANYPORT as [PORT=6000 node app.js] and it'll log port listens as 6000
  ? it didn't work with me! I don't know why,
  I asked Bito but set PORT=6000 and other solutions didn't work

  whatever, now jump to next project, because it has an important validation strategy
*/


// nodemon is to restart code on saving, after modifying code

// I hate Backend 🤓, finished in 3:51 PM 6/16/2023