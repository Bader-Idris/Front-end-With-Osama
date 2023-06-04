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

app.use(notFound);
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
  
  John deploys his projects to heroku as full stack PROJECTS
  once we deploy it, we will need to use access from anywhere option
  ! up 2 lines are specific to heroku
  https://www.digitalocean.com/ is another option
  if locally, we should move ip address from local to PRODUCTION


  then we access our collections
  John created a dummy one as{databaseName: store, collectionName:products}
  ! we're ready to create documents now ... [as tables]
*/