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

app.get('/user_prompt', (req, res) => {
  res.sendFile(__dirname + '/public/user-prompt.html',
    { headers: { 'Content-Type': 'text/html' } });
});
app.post('/user_prompt',  async (req, res)  => {
  const { fname, lname } = await req.body;
  console.log(fname, lname)
  res.send(`Hello ${fname +" "+ lname}`);
});

app.get('/downloadfile', (req, res) => {
  res.sendFile(__dirname + '/public/download-file.html');
});

app.post('/download-pdf', async (req, res) => {
  const filePath = __dirname + '/public/2nd-brain.pdf';
  res.download(filePath);
});


app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/public/projects.html');
});

app.listen(port, () => console.log(`Server is listening port ${port}...`));
