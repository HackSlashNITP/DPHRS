import React, { useState } from 'react';
import './Appointment.css';

const Appointments = () => {
  
  const [appointments, setAppointments] = useState([
    { id: 1, date: '2025-01-30', time: '10:00 AM', description: 'Doctor appointment' },
    { id: 2, date: '2025-02-15', time: '2:00 PM', description: 'Dentist appointment' },
  ]);

  
  const handleEdit = (id) => {
    alert(`Edit appointment with id: ${id}`);
  };

  
  const handleDelete = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <div className="appointments-container">
      <h1 className="appointments-title">Appointments</h1>
      <div className="appointments-list">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-date">{appointment.date}</div>
            <div className="appointment-time">{appointment.time}</div>
            <div className="appointment-description">{appointment.description}</div>
            <div className="appointment-actions">
              <button onClick={() => handleEdit(appointment.id)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(appointment.id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
