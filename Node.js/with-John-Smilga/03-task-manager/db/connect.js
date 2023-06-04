// const connectionString = `mongodb+srv://Bader-Idris:9O9SnhmG5iTdhGhz@nodeexpress4projectcour.ftyinui.mongodb.net/?retryWrites=true&w=majority`
//! after userName: <password>

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
