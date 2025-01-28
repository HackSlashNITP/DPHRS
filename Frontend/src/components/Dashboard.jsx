import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';


const getAccount = async () => {
    //getting address from metamask
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

const Dashboard = () => {
    const [patientDetails, setPatientDetails] = useState([]);

    useEffect(() => {
        const gettingData = async () => {
            const account = await getAccount();

            //making axios request to get all the informations from mongoDB
            const res = await axios.get(`http://localhost:5000/patients/${account}`);

            //setting up the info to our state
            setPatientDetails(res.data);
        }
        gettingData();
    }, []);


    return(
        //Displaying the information
        <div className="p-4 bg-gray-100 min-h-screen text-gray-950 flex flex-col items-center xl">
            {(patientDetails.length > 0) ? (
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Patient Details</h1>
                    {patientDetails.map((patient, index) => (
                        <div key={index} className="mb-4 text-6xl">
                            <img src={patient.photo} alt="Patient" className="w-64 h-64 rounded-full mx-auto mb-4" />
                            <p className="text-lg"><strong>Name:</strong> {patient.name}</p>
                            <p className="text-lg"><strong>Age:</strong> {patient.age}</p>
                            <p className="text-lg"><strong>Address:</strong> {patient.address}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <h1 className="text-xl font-bold">No data found</h1>
                </div>
            )}
        </div>
    )
};

export default Dashboard;