const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { ethers } = require('ethers');

// MongoDB Models
const Patient = require('./models/Patient');
const Doctor = require('./models/Doctor');
const HealthData = require('./models/HealthData');

// Initialize Express app
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/healthcare', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Set up ethers provider and contract
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); // Replace with your Ethereum node URL
const contractAddress = '0xYourContractAddress'; // Replace with your contract address
const abi = [ /* Your contract ABI here */ ];
const contract = new ethers.Contract(contractAddress, abi, provider);

// Set up event listeners
contract.on('PatientRegistered', async (patientId, name, photo, age) => {
    // Create new patient entry in MongoDB
    await Patient.findOneAndUpdate({ patientId: patientId }, { name, photo, age }, { upsert: true });
});

contract.on('DoctorRegistered', async (doctorId, name, specialization, licenseNumber) => {
    // Create new doctor entry in MongoDB
    await Doctor.findOneAndUpdate({ doctorId: doctorId }, { name, specialization, licenseNumber }, { upsert: true });
});

contract.on('DataRegistered', async (patientId, timestamp, dataType, dataHash) => {
    // Save health data to MongoDB
    await HealthData.findOneAndUpdate({ patientId, timestamp }, { dataType, dataHash }, { upsert: true });
});

// Function to get patient data
app.get('/patient/:id', async (req, res) => {
    const patientId = req.params.id;
    const patient = await Patient.findOne({ patientId });

    if (!patient) {
        return res.status(404).send('Patient not found');
    }

    // Check if the requesting user is authorized
    // (You need to handle authorization logic here)

    res.json(patient);
});

// Function to get health data
app.get('/patient/:id/healthData', async (req, res) => {
    const patientId = req.params.id;
    const healthData = await HealthData.find({ patientId });

    if (!healthData.length) {
        return res.status(404).send('No health data found');
    }

    // Check if the requesting user is authorized
    // (You need to handle authorization logic here)

    res.json(healthData);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
