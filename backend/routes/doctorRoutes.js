// routes/doctorRoutes.js
const express = require('express');
const doctorController = require('../controllers/doctorController'); 
const router = express.Router();

// Route to save doctor data
router.post('/register',doctorController.registerDoctor);

module.exports = router;
