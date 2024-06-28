'use strict';
const express = require('express');
const app = express();
app.use(express.static('./public'));
app.use(express.json());


console.log('Hello world');

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, () =>
//       console.log(`Server is listening on port ${port}...`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();


app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})