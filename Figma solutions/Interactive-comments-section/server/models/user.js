const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const Pool = require('pg').Pool;
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "students",
//   password: "admin",
//   port: "5433",
// });

// To make your Express project create a PostgreSQL database after downloading the package pool, you can follow these steps:

/* 1. Install the necessary dependencies:
- Install the `pg` package using npm or yarn:
```shell
  npm install pg
  # or
  yarn add pg
```

2. Configure your Express project to connect to the PostgreSQL database:
- In your project's main file (e.g., `app.js` or `index.js`), import the `pg` package and create a new PostgreSQL client instance:
  ```javascript
     const { Client } = require('pg');

     const client = new Client({
       // PostgreSQL connection options
       host: 'localhost',
       port: 5432,
       user: 'your_username',
       password: 'your_password',
       database: 'your_database',
     });
     ```

3. Create a function to handle database creation:
- Add a function that creates the database if it doesn't exist:
  ```javascript
     async function createDatabase() {
       try {
         await client.connect();

         // Check if the database exists
         const result = await client.query(
           `SELECT 1 FROM pg_database WHERE datname = 'your_database'; `
         );

         if (result.rows.length === 0) {
           // Create the database if it doesn't exist
           await client.query(`CREATE DATABASE your_database; `);
           console.log('Database created successfully.');
         } else {
           console.log('Database already exists.');
         }
       } catch (error) {
         console.error('Error creating database:', error);
       } finally {
         await client.end();
       }
     }
     ```

4. Call the `createDatabase` function when your Express server starts:
- In your main file, call the `createDatabase` function before starting your Express server:
```javascript
    //  ...

     createDatabase()
       .then(() => {
         // Start your Express server
         app.listen(3000, () => {
           console.log('Server started on port 3000.');
         });
       })
       .catch((error) => {
         console.error('Error creating database:', error);
       });
     ```

With these steps, your Express project will check if the PostgreSQL database exists and create it if it doesn't before starting the server.
*/
module.exports = pool;