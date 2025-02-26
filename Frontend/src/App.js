import React from 'react';
import Home from './components/Home';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Feature from './components/Feature';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patientregiester from './components/Patientregister';
import Doctorregister from './components/Doctorregistration';
import PatientProfile from './components/profile';
import Dashboard from './components/Dashboard'
import Doctorprofile from './components/doctorprofile'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/auth" element={<Auth />} /> 
          <Route path="/registerpatient" element={<Patientregiester />} />
          <Route path="/registerdoctor" element={<Doctorregister />} />
          <Route path="/doctors/:id" element={<Doctorprofile/>}/>
          <Route path="/patient/:id" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
