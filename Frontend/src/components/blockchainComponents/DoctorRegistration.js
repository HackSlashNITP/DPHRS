import React, { useState } from 'react';
import { ethers } from 'ethers';
import ABI from "../ABI.json";
import axios from 'axios';
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";



function DoctorRegistration() {
  const [licenseNumber, setlicenseNumber] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [status, setStatus] = useState('');
  const [hash,sethash]=useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("doctor register");

    try {

      const provider = new ethers.BrowserProvider(window.ethereum);

      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ABI, signer);

      const tx = await contract.registerDoctor(licenseNumber, doctorName, specialization);
      await tx.wait();
      console.log('Transaction:', tx);
      sethash(tx.hash);
      if (tx.hash) {
        const response = await axios.post("http://localhost:5000/doctors/register", {
          licenseNumber,
          doctorName,
          specialization,
          hash: tx.hash  
        });
  
        if (response.status === 201) {
          setStatus('Doctor registered successfully and saved to MongoDB!');
        } else {
          setStatus("Error saving data to the database");
        }
      }
     
    } catch (error) {
      console.error(error.response.data); 
    }
    
  };

  return (
    <div>
      <h2>Register Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={licenseNumber}
          onChange={(e) => setlicenseNumber(e.target.value)}
          placeholder="Doctor License Number"
          required
        />
        <input
          type="text"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          placeholder="Doctor Name"
          required
        />
        <input
          type="text"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          placeholder="Specialization"
          required
        />
        <button type="submit">Register Doctor</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default DoctorRegistration;
