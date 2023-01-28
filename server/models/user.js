const mongoose = require('mongoose');
const crudSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    mail: {
      type: String,
      required: true
    }
  })
  const User = module.exports = mongoose.model('User',crudSchema);