import React, { useState } from 'react';
import { ethers } from 'ethers';
import ABI from "../ABI.json";
import axios from 'axios'; 

const contractABI = ABI;
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function BookAppointment() {
  const [doctorID, setDoctorID] = useState('');
  const [patientAddress, setPatientAddress] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [hashToken, setHachToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Blockchain transaction
      const provider = new ethers.BrowserProvider(window.ethereum);

      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      //making a call to get patient id from patient addess
      const res = await axios.get(`/getPatient/${patientAddress}`);
      const patientId = res.data.patientId;

      const tx = await contract.createAppointment(patientId, doctorID, date, hashToken);
      await tx.wait();

      // MongoDB data saving
      await axios.post('/appointments', {
        doctorAddress,
        patientAddress,
        date,
      });

      setStatus('Appointment booked successfully!');
    } catch (error) {
      setStatus('Error booking appointment.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={doctorID}
          onChange={(e) => setDoctorID(e.target.value)}
          placeholder="Doctor ID"
          required
        />
        <input
          type="text"
          value={patientAddress}
          onChange={(e) => setPatientAddress(e.target.value)}
          placeholder="Patient Address"
          required
        />
        <input
          type="text"
          value={hashToken}
          onChange={(e) => setHachToken(e.target.value)}
          placeholder="Hash Token"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Book Appointment</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default BookAppointment;
