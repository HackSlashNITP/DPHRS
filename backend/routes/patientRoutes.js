const express = require('express');
const { getPatientDetails } = require('../controllers/contractController');
const router = express.Router();

router.get('/patient/:patientId', getPatientDetails);

module.exports = router;