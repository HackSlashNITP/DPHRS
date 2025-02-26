const express = require('express');
const Patient = require('../models/Patient'); // Assuming you have a Patient model
const router = express.Router();

// Route to save patient data
router.post('/', async (req, res) => {
  console.log("patient info");
  const { address, name ,age,photo} = req.body;
  console.log(req.body);
  try {
    const newPatient = new Patient({ address, name,age,photo });
    const Patients= await newPatient.save();
    console.log("saved patient:",Patients)
   res.status(201).json({
       message: "Patient registered successfully",
       PatientId: Patients._id
   });
    res.status(201).json({ message: 'Patient saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving patient: ' + error.message });
  }
});




module.exports = router;
