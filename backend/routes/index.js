const express = require('express');
const router = express.Router();
const appointmentroute=require('./appointmentRoutes');
const doctorRoute=require('./doctorRoutes');
const healthData=require('./healthDataRoutes')
const patientroute=require('./patientRoutes');
const patientdetail=require('./patientdata');
const doctors=require('./doctorprofile')
// router.post('/', (req, res) => {
//     res.send('Appointment created!');
// });
router.use('/appointment',appointmentroute);
router.use('/patientregister',patientroute);
router.use('/doctorr',doctorRoute);
router.use('/doctors',doctors)
router.use('./patient',patientdetail);
module.exports = router;