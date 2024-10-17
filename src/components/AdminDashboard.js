import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./AdminDashboard.css";
import logo from './logo.png'; 
import user from './user.png'; 
import SurveyHistoryChart from "./SurveyHistoryChart"; 

const AdminDashboard = ({ onLogout }) => {
  const navigate = useNavigate(); 

  const handleNewSurveyClick = () => {
    navigate("/new-survey"); 
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="logo">
          <img src={logo} alt="Survey BIT Logo" />
        </div>
        <h1>Survey BIT</h1>
        <div className="profile-section">
          <img src={user} alt="Admin Logo" />
          <div className="profile-dropdown logout-button">
            <button onClick={onLogout}>Logout</button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <nav className="sidebar">
          <ul>
            <li><i className="icon-home" /> Home</li>
            <li onClick={handleNewSurveyClick}><i className="icon-survey" /> New Survey</li> {/* Updated to include onClick */}
            <li><i className="icon-report" /> Report</li>
          </ul>
        </nav>

        <main className="main-content">
          <section className="welcome-section">
            <h2>Hi! Mr. Mega 👋</h2>
            <div className="survey-info">
              <h3>Surveys Given</h3>
              <p>06</p>
            </div>
          </section>

          <section className="survey-history-section">
            <h3>Survey History</h3>
            <SurveyHistoryChart />
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
