const express = require('express');
const Patient = require('../models/Patient'); // Assuming you have a Patient model
const router = express.Router();

// Route to save patient data
router.post('/register', async (req, res) => {
  console.log("patient info");
  const { address, name ,patientId,age,photo} = req.body;
  console.log(req.body);
  try {
    const newPatient = new Patient({ address, name ,patientId,age,photo });
    await newPatient.save();
    res.status(201).json({ message: 'Patient saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving patient: ' + error.message });
  }
});

//creating a route to get patient data based on the patientAddress
const getPatient = async (req, res) => {
  const { patientAddress } = req.params;
  try {
    const patient = await Patient.findOne({ address: patientAddress });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Error getting patient: ' + error.message });
  }
}
router.get('/getPatient/:patientAddress', getPatient);

module.exports = router;
