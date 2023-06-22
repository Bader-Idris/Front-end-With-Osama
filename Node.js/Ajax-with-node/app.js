const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
const pool = require('./db');


app.use(express.json());
app.use(express.urlencoded({ extended: false }))// body parser, for POST requests

// check E:\coding_and_programming\HTML_and_CSS_Elzero\Node.js\with-John-Smilga\02-express-tutorial\11-methods.js
//! it has a rich data for urlencoded
// ----------------------------------------------------------------

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).send('Hello Bader');
});
app.get('/link', (req, res) => {
  res.status(200).send('<a href="/">Go to Home Page</a>');
});

app.post('/test', (req, res) => {
  const { fname, lname } = req.body;
  console.log(fname, lname)
  res.send(`Hello ${fname +" "+ lname}`);
});




app.listen(port, () => console.log(`Server is listening port ${port}...`));
