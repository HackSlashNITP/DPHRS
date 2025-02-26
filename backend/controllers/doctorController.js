const Doctor = require('../models/doctor');
exports.registerDoctor = async (req, res) => {
  const { doctorName, specialization, licenseNumber, hash } = req.body;
  console.log(" data:", req.body);

  try {
    const doctor = new Doctor({
      doctorName,
      specialization,
      hash,
      licenseNumber
    });
    const savedDoctor = await doctor.save();
     console.log("saved doctor:",savedDoctor)
    res.status(201).json({
        message: "Doctor registered successfully",
        doctorId: savedDoctor._id
    });
  } catch (error) {
    console.error("Error while registering doctor:", error); 
    res.status(500).json({ error: error.message });
  }
};
