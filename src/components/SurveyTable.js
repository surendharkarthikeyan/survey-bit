import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SurveyTable.css';
import user from './user.png';

const SurveyTable = () => {
  const navigate = useNavigate(); // To navigate programmatically
  const surveys = [
    {
      id: 1,
      title: "Academics",
      description: "Give feedback for teaching faculties.",
      assignedTo: "SathisKumar R"
    },
    {
      id: 2,
      title: "Short-film",
      description: "Audition date 17/05/2024",
      assignedTo: "Surendhar K"
    }
  ];

  // Function to handle home button click
  const handleHomeClick = () => {
    navigate('/'); // Redirect to StudentDashboard
  };

  return (
    <div className="survey-table-container">
      <header className="header">
        <div className="logo">Survey BIT</div>
        <div className="profile-section">
          <img src={user} alt="Admin Logo" />
        </div>
      </header>
      
      <aside className="sidebar">
        <button className="sidebar_home" onClick={handleHomeClick}>Home</button>
      </aside>

      

      <main className="main-content">
        <h2 className="survey-title">
          <span className="survey-icon">📋</span> Surveys
        </h2>

        <table className="survey-table">
          <thead>
            <tr>
              <th>s.no</th>
              <th>Title</th>
              <th>Description</th>
              <th>Assigned</th>
              <th>Take / Reject</th>
            </tr>
          </thead>
          <tbody>
            {surveys.map((survey, index) => (
              <tr key={survey.id}>
                <td>{index + 1}</td>
                <td>{survey.title}</td>
                <td>{survey.description}</td>
                <td>{survey.assignedTo}</td>
                <td>
                  <button className="take-btn">Take</button>
                  <button className="reject-btn">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default SurveyTable;
