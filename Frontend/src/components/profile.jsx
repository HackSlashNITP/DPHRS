import React from "react";

const PatientProfile = () => {
  const patientData = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    bloodGroup: "O+",
    contact: "+1 234 567 890",
    email: "john.doe@example.com",
    address: "123, Elm Street, Springfield",
    profileImage: "https://via.placeholder.com/150",
    medicalHistory: [
      "Diabetes - Diagnosed 2018",
      "High Blood Pressure - Diagnosed 2020",
      "Allergy to Penicillin",
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 p-6 flex items-center">
          <img
            src={patientData.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />
          <div className="ml-6 text-white">
            <h2 className="text-3xl font-bold">{patientData.name}</h2>
            <p className="text-sm font-medium">{patientData.email}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Personal Details */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="text-sm text-gray-500">Age</p>
              <p className="text-lg font-medium">{patientData.age}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="text-lg font-medium">{patientData.gender}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Blood Group</p>
              <p className="text-lg font-medium">{patientData.bloodGroup}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact</p>
              <p className="text-lg font-medium">{patientData.contact}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-lg font-medium">{patientData.address}</p>
            </div>
          </div>

          {/* Medical History */}
          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Medical History</h3>
          <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {patientData.medicalHistory.map((item, index) => (
                <li key={index} className="text-gray-600 font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
