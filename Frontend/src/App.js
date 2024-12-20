import React from 'react';
import Home from './Components/Home';
import Auth from './Components/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patientregiester from './Components/Patientregister';
import Doctorregister from './Components/Doctorregistration';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/auth" element={<Auth />} /> 
          <Route path="/registerpatient" element={<Patientregiester />} />
          <Route path="/registerdoctor" element={<Doctorregister />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
