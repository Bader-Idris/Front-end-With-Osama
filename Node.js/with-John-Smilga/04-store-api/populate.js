require('dotenv').config()
// this is where do we set the products.json file and connect it to our server dynamically
const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()//! this is risky, it cleans up the DB to overWrite new Values
    await Product.create(jsonProducts)// to see if this worked well, go to mongo website => browse collections
    console.log('Success!!!!')
    process.exit(0)// this is how to stop the process without any problems, and not stopping the server 
    // [process => global variable]
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
