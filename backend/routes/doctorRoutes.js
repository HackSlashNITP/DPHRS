const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor'); 
router.post('/', async (req, res) => {
  const { doctorName, specialization, licenseNumber, hash } = req.body;
  
  console.log("Received data:", req.body); 
  try {
    const doctor = new Doctor({
      doctorName,
      specialization,
      licenseNumber,
      hash, 
    });

    const savedDoctor = await doctor.save();
    console.log("saved doctor:",savedDoctor)
   res.status(201).json({
       message: "Doctor registered successfully",
       doctorId: savedDoctor._id
   });
  } catch (error) {
    console.error("Error while registering doctor:", error.message);
    res.status(500).json({ error: "Error registering doctor: " + error.message });
  }
});

module.exports = router;
