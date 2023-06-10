# this is a course for connecting PostgreSQL with Express app

## required frameworks

- Node.js
- PostgreSQL
- Express.js
- postman

### THE API WE'LL BE CREATING

- crud application
- so we'll interact with crud students

#### the teacher called his project as restAPI

- initially he initializes the project with creating package.json file by typing `npm init -y`
- then he installs express by commanding: `npm i --save express`
- then he installs pg which stands for  PostgreSQL as: `npm i pg`
- after creating a little simply server.js file which only uses express and responses with some string =>
- we open psql in our machine me as [Windows] by typing: `psql` in start menu.  I was done installing it PostgreSQL
- then we only skip by typing: `enter`.
- my local psql password is `admin`
- to conform I'm connected I type: `🔴 \conninfo 🔴` it appears our userName and its like super user
- to see existing dbs we type in psql: `\l`
- `to create my own DB` I type: `🔴 CREATE DATABASE students; 🔴`as student
- we should see `CREATE DATABASE` after that, meaning, Job's done.
- next, we need to connect to our database as: `🔴 \c students 🔴`
- to clean our terminal in Windows, type: `\! cls` backslash exclamation symbol cls, in non-windows replace cls with `clear`
- after connecting to our database, we can create out table for it, by typing: `🔴 CREATE TABLE students (`
- now we add our fields as: `ID SERIAL PRIMARY KEY,` that means it'll auto increment when adding students, then
- we create name for our user: `name VARCHAR(255),`255 means how long the name will be, which is crazy 255😂

##### **tables** are appearing as objects, because we add commas to separate between

- then `email VARCHAR(255),` then, `age INT,` as number type
- then `dob DATE); 🔴` for date of birth as date type, and ) is for closing our object, semicolon to end the code; it returns `CREATE TABLE` to indicate✅
- to see our created table we type: `\dt` **display table**
- after having our database and table, we'll **create 2 students** and **insert** them in our database
- do this: `INSERT INTO students (name, email, age, dob)`, we don't add the **id**, because postgreSQL automatically does, then hit `enter`
- then *`VALUES ('Joe', 'joe@gmail.com', 48, '1973-04-04'), ('bader', 'www.bader.com9@gmail.com', 22, '2000-09-19');`* date is yyyy-mm-dd
- it'll return INSERT 0 2
- now, we check our table: `SELECT * FROM students LIMIT 10;` limit 10 is `opt`, and best practice when having a large number of rows

## => connect pg database to our db.js module

- see db.js to check important steps, especially Pool and pool constructed class 
- then we create our file structure within our database dir
- create 3 primary modules: `queries.js` && `routes.js` && `controller.js`, as we learned their functionalities in express course

### connect router && with server.js

- after creating the basic code, we import them as usual to server.js

#### writing code to get db data

- initially, we import db.js code we typed before `22:00`, see requiring pool in controller.js
- 