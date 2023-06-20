# Todo app using PERN with Ania Kubow

- I started this project after finishing, nodejs basics, express basics, plus 2 projects in Express with mongoose and little libraries that are: [`dotenv`,`express-async-errors`, `nodemon`]
- and After knowing some basics of PostgreSQL by taking some basics around 8 months from this typing, and finishing little course called `postgreSQL` the teacher used crud approach to simpify it, and it was awesome, one hour but full of useful info
[check it here](../PostgreSQL-Express-node/)
- the teacher Ania Kubow will deploy the project when finishing it.

## Starting

- we start by creating the famous react library npx package by typing `npx create-react-app deployed-to-do-app` in the `root path`
- second part of code is the name of the project, we can simply connect it with nodemon to spare some time
- she removes testing files, first set is: `logo.svg`& `setupTests`& `reportWebVitals` & `jest test one` & `App.css` all in src DIR
- then we delete last func in index.js with its comments and importing
- then we delete these first 2 lines in App.js && clear it, making it only with one div

```javascript
import logo from './logo.svg';
import './App.css';
```

- then she removes styles in index.css

---

- the 3 important files are `App` & `index.js` & `index.css` and all are in src DIR

---

- then she migrated everything into a subfolder and named it `client`
- => she creates a `server` DIR

---

- then go to `server` DIR and command this in CMD `npm init`, then keep skipping `Enter`
- a helpful approach is to create a `package.json` in the root DIR, it helps with `deployment`
- in root `package` we create a `"build"` inside `"scripts"` as this!!!

```json
"scripts": {
  "build": "if-env TYPE=server && (cd server && npm install) || (cd client && npm install)",
}
```

- its obviously to install dependencies in server and client DIRS
- then we install the `if-env` package in ROOT/app DIR, command: `npm i if-env`
- then write this command in same `scripts obj`:🔽 it's for each DIR

```json
"server": "node ./server/server.js",
"client": "cd client && npm start"
```

- `"main"`, `"author"` and `"license"` in ROOT/app package aren't necessary
- 🔴**in server DIR create `server.js` it's gonna hold up Back-end**🔴
- in client DIR run `npm start`, it'll automatically open in local as live server does

---

- then go open to src DIR => `App.js`
- see src DIR
- in the new `components` DIR, she created many files, and said 2 are from her customization, they're `ProgressBar` & `TickIcon`
- then she copied the simple func and changed funcs names as:

```javascript
const customizedName = () => {
  return (
    <div>
    </div>
  );
};
export default customizedName;
```

- then import file into App module.
- after some simple styles in app, listHeader, and index.css, now create a `todoapp` DB using postgres locally as usual
- she created a `data.sql` file in the server and added same commands

```postgres
CREATE DATABASE todoapp;
<!-- \c todoapp |appearing as only for psql-->
CREATE TABLE todos (
  id VARCHAR(255) PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);
<!-- check the rest in data.sql -->
```

- hashed_password isn't same as passwd, it's `insecure` using real one in data.sql file
- copy each one separately to paste it in psql CMD, 
- then check code by `SELECT * FROM todos;`
- then insert into todos `INSERT INTO todos(id, user_email, title, progress, date) VALUES('0', 'ania@test.com', 'first to do', 10, '1994-11-29');`

---
🔴

- **id** with prior course was more dynamic as `ID SERIAL PRIMARY KEY` when creating it, not sure if changing its type is available.
- to make date as real one use `DATE`, and it's as yyyy-mm-dd [set it as prior course]

🔴

---

- we need to install some packages to run pg in our server
- in server DIR do following: 

```node
npm i express cors bcrypt jsonwebtoken uuid dotenv nodemon pg

```

🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

- cros here is for stopping cors error messages that don't allow us to communicate to our DB 
- bcrypt help us essentially hash our passwords
- jsonwebtoken helps creating a token to log in&out
- uuid helps generating a random unique identifier
- dotenv & nodemon & pg are known to you

🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴

- then in server DIR => package.json => make inside scripts as: 

```json
"start": "nodemon server.js",
"deploy": "node server.js",
"build": "react-scripts build",
"test":"react-scripts test",
"eject":"react-scripts eject"
```

- then to start server command in CMD => 🔴`npm run start`🔴| looks like same as normal nodemon starting
- then we set PORT in our server.js file, not `.env`
- she'll provide the .env code in her `Kinsta platform`



- then create two dotenv one for each