const mongoose = require('mongoose');
console.log("helo")
const doctorSchema = new mongoose.Schema({
  doctorName: { type: String, required: true },
  specialization: { type: String, required: true },
  hash: { type: String, required: true }, // Ethereum address
  id : {type:Number},
});

module.exports= mongoose.model('newdoctor', doctorSchema);

