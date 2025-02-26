// Patientregister.jsx
import React from "react";
import axios from 'axios';
import { ethers } from 'ethers';
import ABI from "../ABI.json";
import { useState } from "react";
import "./Patientregistration.css";
import { useNavigate } from "react-router-dom";
const contractABI = ABI;
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";


function Patientregister() {
  const [patientAddress, setPatientAddress] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');
  const [status, setStatus] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Blockchain transaction
      const provider = new ethers.BrowserProvider(window.ethereum);

      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);


      const tx = await contract.registerPatient(name,age,photo);
      await tx.wait();
      console.log(tx);
      // Save to MongoDB
      setPatientAddress(tx.hash);
      if(tx.hash){
        console.log("address",patientAddress);
        const response=await axios.post('http://localhost:5001/api/patientregister', {
          address: patientAddress,
          name,
          age,
          photo,
        });
        console.log("response:",response.data);
        if (response.status === 201) {
          setStatus('Patient registered successfully');
          const Patientid = response.data.PatientId;
       
          navigate(`/patient/${Patientid}`);
        } else {
          setStatus("Error saving data to the database");
        }
      }
    } catch (error) {
      setStatus('Error registering patient.');
      console.error(error);
    }
  };
  return (
    <div id="patient-register">
      <section className="registerdphrs">
        {[...Array(200)].map((_, index) => (
          <span key={index}></span>
        ))}

        <div className="signin">
          <div className="content">
            <h2>Patient Registration</h2>
            <form onSubmit={handleSubmit}>
            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}

                  required
                />
                <i>Full Name</i>
              </div>

              <div className="inputBox">
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}

                  required
                />
                <i>Age</i>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder=""
                  required
                />
                <i>Photo URL</i>
              </div>
              <div className="inputBox">
                <button type="submit">Register Patient</button>
              </div>
              
            </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Patientregister;
