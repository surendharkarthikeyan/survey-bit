import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import SurveyForm from './components/SurveyForm'; // Import SurveyForm
import SurveyTable from './components/SurveyTable';

function App() {
  const [user, setUser] = useState(null); // State to track logged-in user

  // Handle login based on the user's email and password
  const handleLogin = ({ role, email }) => {
    setUser({ role, email }); // Set user role and email after successful login
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
  };

  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={
            user ? (
              user.role === 'admin' ? (
                <AdminDashboard onLogout={handleLogout} />
              ) : (
                <StudentDashboard onLogout={handleLogout} />
              )
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        {/* Route for SurveyForm */}
        <Route path="/new-survey" element={<SurveyForm />} />
        {/* Route for new surveys going to attend */}
        <Route path="/take-survey" element={<SurveyTable />} />
          {/* Route for student dashboard */}
        <Route path="/" element={<StudentDashboard />} />
        {/* Fallback to redirect to the home page (login) if the route doesn't exist */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
