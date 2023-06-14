const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,//? built-in validators
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: {//nothing will pass to database except for those who have been set, name, completed
    // even if we add more keys when sending POST requests
    type: Boolean,
    default: false,
  },
})

// this is our schema name ~ to tables
module.exports = mongoose.model('Task', TaskSchema)
// the instance of models is called document

//! this file is responsible for creating new "task", table[schema] in our database