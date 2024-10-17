import React, { useState } from 'react';
import './Login.css';
import logo from './logo.png';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'mega@gmail.com' && password === 'mega') {
      onLogin({ role: 'admin', email });
    } else if (email === 'surendhar@gmail.com' && password === 'surendhar') {
      onLogin({ role: 'student', email });
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Survey Bit Logo" className="login-logo" /> {/* Use the imported logo */}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">Sign In</button>
      </form>
      {error && <p className="login-error">{error}</p>}
      
    </div>
  );
};

export default Login;
