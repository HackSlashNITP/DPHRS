import React from "react";
import "./Patientregistration.css";

function Doctorregister() {
  return (
    <div id="patient-register">
    <section className="registerdphrs">
      {[...Array(200)].map((_, index) => (
        <span key={index}></span>
      ))}

      <div className="signin">
        <div className="content">
          <h2>Doctor Registration</h2>

          <div className="form">
            <div className="inputBox">
              <input type="text" required />
              <i>Full Name</i>
            </div>

            <div className="inputBox">
              <input type="text" required />
              <i>specialization</i>
            </div>

            <div className="inputBox">
              <input type="password" required />
              <i>Address</i>
            </div>

            

            <div className="inputBox">
              <input type="submit" value="Register" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Doctorregister;
