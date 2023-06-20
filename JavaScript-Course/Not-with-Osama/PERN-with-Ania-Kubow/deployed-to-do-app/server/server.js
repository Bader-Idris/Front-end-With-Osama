const PORT = process.env.PORT ?? 8000;
// the ?? is named as [nullish coalescing operator], provided in ECMA 2020
// it's exactly as: a != null ? a : null
const cors = require('cors');//this is to pass cors policy which stops us from getting data from Front to Back
const express = require('express');
const app = express();
const pool = require('./db');

app.use(cors());

// app.use(express.json());//only for post
app.get('/', (req, res) => {
  res.send('Hello Bader');
});

app.get('/todos/:userEmail', async (req, res) => {//using controllers as John is much more cleaner
  const userEmail = req.params//.user_email;
  try {//using async wrapper or express error extension is much cleaner, John taught me
    const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail])//using separate file is better
    res.json(todos.rows);//rows is important
  } catch (error) {
    console.log(error);//using custom error handler has John is much better
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));