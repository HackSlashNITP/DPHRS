const express=require('express');
const router=express.Router()
const Doctor=require('../models/doctor')
router.get('/:id',async(req,res)=>{
 const {id}=req.params;
 try {
  const doctor = await Doctor.findById(id); 
  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' }); 
  }
  res.status(200).json(doctor); 
} catch (error) {
  console.error('Error while fetching doctor by ID:', error);
  res.status(500).json({ error: 'Server error while fetching doctor' });
}
})
module.exports = router;