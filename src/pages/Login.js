// Login.js
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); 
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);

  const onLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      handleLogin(role); // Pass role to context
      if (role === 'admin') {
        navigate('/admin'); // Redirect to the Admin Dashboard
      } else {
        navigate('/monuments'); // Redirect to the Monuments Page
      }
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="page-center">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={onLogin} className="login-form">
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Select Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Register here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;