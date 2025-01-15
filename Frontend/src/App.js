import React from 'react';
import Home from './components/Home';
import Auth from './components/Auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Patientregiester from './components/Patientregister';
import Doctorregister from './components/Doctorregistration';
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
