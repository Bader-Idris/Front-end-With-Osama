const port = process.env.PORT || 5000;
const mainRoutes = require('./routes/mainRoutes.js');
require('dotenv').config();
const express = require('express');
const app = express()
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))// body parser, for POST requests
app.use('/', mainRoutes)


app.listen(port, () => console.log(`Server is listening port ${port}...`));