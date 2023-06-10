const express = require('express');
const studentRoutes = require('./src/student/routes');
// const studentController = require('./src/student/controller');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello Hanady');
});

app.use('/api/v1/students',studentRoutes)
app.listen(port, () => console.log(`app listening on port ${port}`));