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

// if there's no database existing this will work
// async function createDatabase() {
//   try {
//     await client.connect();
//     // Check if the database exists
//     const result = await client.query(
//       `SELECT * FROM pg_database WHERE datname = "${process.env.PGDATABASE}";`
//     );
//     if (result.rows.length === 0 || error.code === '3D000') {
//       await client.query(`CREATE DATABASE ${process.env.PGDATABASE};`);
//       console.log('Database created successfully.');
//     } else {
//       console.log('Database already exists.');
//     }
//   } catch (error) {
//     console.error('Error creating database:', error);
//   } finally {
//     await client.end();
//   }
// }
async function startServer() {
  try {
    await createDatabase();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.error('Error starting server:', error);
  }
}
startServer();