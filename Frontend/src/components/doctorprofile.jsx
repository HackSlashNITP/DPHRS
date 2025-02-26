import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import 'tailwindcss/tailwind.css';
const DoctorProfile= () => {
      const [doctorData, setDoctorData] = useState(null); 
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);

  const {id}=useParams();
  const getdata = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/doctors/${id}`);
      console.log(response.data);
      setDoctorData(response.data);
      setLoading(false); 

    } catch (err) {
      console.error("Error fetching doctor data:", err);
      setError(err.message);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getdata();
  }, []);

    return(
       
        <div className="p-4 bg-gray-100 min-h-screen text-gray-950 flex flex-col items-center xl">
            {doctorData ? (
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Profile</h1>

                        <div className="mb-4 text-6xl">
                            {/* <img src={patient.photo} alt="Patient" className="w-64 h-64 rounded-full mx-auto mb-4" /> */}
                            <p className="text-lg"><strong>Name:</strong> {doctorData.doctorName}</p>
                            <p className="text-lg"><strong>Specialization:</strong> {doctorData.specialization}</p>
                            <p className="text-lg"><strong>License Number:</strong> {doctorData.licenseNumber}</p>
                        </div>
                   
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-xl font-bold">No data found</h1>
                </div>
            )}
        </div>
    )
};

export default DoctorProfile;
