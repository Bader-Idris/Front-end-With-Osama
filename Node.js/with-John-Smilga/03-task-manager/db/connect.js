// const connectionString = `mongodb+srv://Bader-Idris:9O9SnhmG5iTdhGhz@nodeexpress4projectcour.ftyinui.mongodb.net/?retryWrites=true&w=majority`
//! after userName: <password>
//! after mongodb.net/ we can name our project as 🔽
// const connectionString = `mongodb+srv://Bader-Idris:9O9SnhmG5iTdhGhz@nodeexpress4projectcour.ftyinui.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority`
//? it's the [database name]

const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
//mongoose.connect is the connection string, it returns a promise