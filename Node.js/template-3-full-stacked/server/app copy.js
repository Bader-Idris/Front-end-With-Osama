const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
require('dotenv').config();
const subMime = require('./routes/main-nav')
const BeaufortTek = require('./routes/Beaufort-Tek');
app.use(express.json());
app.use(express.urlencoded({ extended: false }))// body parser, for POST requests

// check E:\coding_and_programming\HTML_and_CSS_Elzero\Node.js\with-John-Smilga\02-express-tutorial\11-methods.js
//! it has a rich data for urlencoded
// ----------------------------------------------------------------
app.use(express.static('./public'));

app.use('/', subMime);//because I used |this| const path = require('path'); |and| const parentDir = path.dirname(__dirname);
// when making projects followed by / it'll prevent uploading css & JS files,//! so this approach isn't correct

// Beaufort Tek project
app.use('/projects/Beaufort_Tek', BeaufortTek)


app.listen(port, () => console.log(`Server is listening port ${port}...`));
