const express=require('express');
const router=express.Router()
const Patient=require('../models/Patient')
router.get('/:id',async(req,res)=>{
 const {id}=req.params;
 try {
  const patient = await Patient.findById(id); 
  if (!patient) {
    return res.status(404).json({ message: 'Patient not found' }); 
  }
  res.status(200).json(patient); 
} catch (error) {
  console.error('Error while fetching doctor by ID:', error);
  res.status(500).json({ error: 'Server error while fetching doctor' });
}
})
module.exports = router;