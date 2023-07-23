const port = process.env.PORT || 5000;
const path = require('path');
const parentDir = path.dirname(__dirname);
require('dotenv').config();
const express = require('express');
const app = express();
const { Pool } = require('pg');
const mainPage = require('./routes/mainPage');

app.use(express.static(path.resolve(parentDir + '/client')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', mainPage)


app.listen(port, () =>
  console.log(`Server is listening on port ${port}...`));