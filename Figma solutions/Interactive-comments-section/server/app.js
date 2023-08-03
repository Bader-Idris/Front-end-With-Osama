const port = process.env.PORT || 5000;
require('dotenv').config();
const express = require('express');
const app = express();
const { Pool } = require('pg');
const client = require('./db/db.js');

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))// body parser, for POST requests

const mainRoutes = require('./routes/mainRoutes.js');
app.use('/', mainRoutes)

//? this little req/res object is for seeing headers in client's position
// app.get('/headers', (req, res) => {
//   res.type('text/plain')
//   const headers = Object.entries(req.headers)
//     .map(([key, value]) => `${key}: ${value}`)
//   res.send(headers.join('\n'))
// })

async function startServer() {
  try {
    // await createDatabase();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.error('Error starting server:', error);
  }
}
startServer();