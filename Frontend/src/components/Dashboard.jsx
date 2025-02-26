import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import "./dash.css";
import { Line } from 'react-chartjs-2';
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [patient,setpatient]=useState(null);
  const {id}=useParams();
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
 useEffect(()=>{
    const getpatient=async()=>{
      try {
        const response=await axios.get(`http://localhost:5001/api/doctors/${id}`);
        console.log(response.data);
        setpatient(response.data)
      } catch (error) {
        console.error("Error fetching doctor data:", error);

      }
   getpatient()
    }
 },[])

  const profileInfo = {
    name: "Aman Mishra",
    email: "amanmis601@gmail.com",
    Address: "Bihar",
    year: "Senior",
    branch: "Computer Science",
  };

  const disorders = ["Anxiety", "Depression"];
  const recentDiagnoses = ["High blood pressure", "Mild asthma"];
  const activities = ["Yoga", "Meditation", "Running"];
  const appointments = [
    { date: "2025-01-30", time: "10:00 AM" },
    { date: "2025-02-15", time: "2:00 PM" },
  ];

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Calorie Intake',
        data: [2000, 1900, 2500, 2200], 
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white'
        }
      },
      x: {
        ticks: {
          color: 'white' 
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white' 
        }
      }
    }
  }
  
  return (
    <div id="student">
      <div className="app">
        <header className="app-header">
          <div className="app-header-logo">
            <h1 className="logo-title">
              <span>Health Dashboard</span>
            </h1>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
          <div className="app-header-actions">
            <button className="user-profile">
              <span>{profileInfo.name}</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsyqbhHhVGJ8pKqVAjeHvXvluuSE2WTaYGGPOIeEWUnINhvSaGxIURvhw3-NgrbNhkzg&usqp=CAU"
                alt="User profile"
              />
            </button>
          </div>
        </header>

        <div className="app-body">
          <div className={`app-body-navigation ${isMenuOpen ? "open" : ""}`}>
            <nav className="navigation">
              <a href="/">
                <span>Home</span>
              </a>
              <a href="/dashboard">
                <span>Profile</span>
              </a>
              <a href="/dashboard/projects">
                <span>Appointments</span>
              </a>
            </nav>
          </div>

          <section className="service-section">
            <div className="info-box">
              <h2>Personal Info</h2>
              <div className="personal-info-box">
                <p>
                  <strong>Name:</strong> {profileInfo.name}
                </p>
                <p>
                  <strong>Email:</strong> {profileInfo.email}
                </p>
                <p>
                  <strong>Address :</strong> {profileInfo.Address}
                </p>
              </div>
            </div>

            <div className="info-box">
              <h2>Disorders</h2>
              <ul>
                {disorders.map((disorder, index) => (
                  <li key={index}>{disorder}</li>
                ))}
              </ul>
            </div>

            <div className="info-box">
              <h2>Recent Diagnoses</h2>
              <ul>
                {recentDiagnoses.map((diagnosis, index) => (
                  <li key={index}>{diagnosis}</li>
                ))}
              </ul>
            </div>

            <div className="info-box">
              <h2>Monthly Progress</h2>
              <Line data={data} options={options} />
            </div>

            <div className="info-box">
              <h2>Activity</h2>
              <ul>
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>

            <div className="info-box">
              <h2>Appointments</h2>
              <ul>
                {appointments.map((appointment, index) => (
                  <li key={index}>
                    Date: {appointment.date}, Time: {appointment.time}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
