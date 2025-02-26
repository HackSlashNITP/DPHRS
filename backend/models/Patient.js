const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  photo: {
    type: String, 
    required: true,
  }
});

module.exports = mongoose.model('patients', PatientSchema);
