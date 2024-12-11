import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user'); // Default role set to 'user'
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  // Password strength checker
  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      return 'Weak';
    }
    if (!/\d/.test(password)) {
      return 'Moderate';
    }
    if (/[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
      return 'Strong';
    }
    return 'Good';
  };

  // Real-time password validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(checkPasswordStrength(value));
  };

  // Real-time email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Final validation before submission
    if (passwordStrength === 'Weak') {
      setErrorMessage('Password is too weak. Add numbers, uppercase letters, and special characters.');
      return;
    }

    if (emailError) {
      setErrorMessage('Please fix the email format before submitting.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        username,
        password,
        email,
        role,
      });

      if (response.status === 200) {
        alert('Signup successful');
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMessage(error.response?.data?.message || 'Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="page-center">
      <div className="signup-container">
        <h2>SignUp</h2>

        {/* Show error message if validation fails */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
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
              onChange={handlePasswordChange}
              required
            />
            {password && (
              <p
                style={{
                  color: passwordStrength === 'Strong' ? 'green' : 'red',
                  fontSize: '0.9em',
                }}
              >
                Password Strength: {passwordStrength}
              </p>
            )}
          </div>
          <div>
            <label>Email ID:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p style={{ color: 'red', fontSize: '0.9em' }}>{emailError}</p>}
          </div>
          <div>
            <label>Select Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">SignUp</button>
        </form>

        {/* Link to go to the login page */}
        <p className="login-link">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            style={{ cursor: 'pointer', color: 'blue' }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
