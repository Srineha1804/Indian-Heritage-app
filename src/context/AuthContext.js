import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State to track if a user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State to track the user's role (e.g., user or admin)
  const [role, setRole] = useState('user'); // Default role is 'user'

  // Function to handle login
  const handleLogin = (userRole) => {
    setIsLoggedIn(true); // Set login state to true
    setRole(userRole); // Set the role based on the user's login (e.g., 'user' or 'admin')
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Set login state to false
    setRole('user'); // Reset role to default ('user') on logout
  };

  return (
    // Provide the context value to children components
    <AuthContext.Provider value={{ isLoggedIn, role, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
