import React from "react";
import { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { useNavigate } from "react-router-dom";
import ABI from "../ABI.json";
import axios from 'axios';
import "./Patientregistration.css";
import "./doctorregister.css"
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
function Doctorregister() {
  const navigate=useNavigate();
  const [licenseNumber, setlicenseNumber] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [status, setStatus] = useState('');
  const [hash, sethash] = useState('');
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
        const response = await axios.post("http://localhost:5001/api/doctorr", {
          licenseNumber,
          doctorName,
          specialization,
          hash: tx.hash
        });
        console.log("response:",response.data);
        if (response.status === 201) {
          setStatus('Doctor registered successfully and saved to MongoDB!');
          const DoctorId = response.data.doctorId;
       
          navigate(`/doctors/${DoctorId}`);
        } else {
          setStatus("Error saving data to the database");
        }
      }

    } catch (error) {
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
        <form onSubmit={handleSubmit}>
          <div className="content ">
            <h2>Doctor Registration</h2>

            <div className="form">
              <div className="inputBox">
                <input type="text"
                  value={licenseNumber}
                  onChange={(e) => setlicenseNumber(e.target.value)}
                  placeholder=""
                  required />
                <i>LienseNumber</i>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  placeholder=""
                  required
                />
                <i>Full Name</i>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder=""
                  required
                />
                <i>Specialization</i>
              </div>
              <div className="inputBox">
                <button type="submit">Register Doctor</button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Doctorregister;
