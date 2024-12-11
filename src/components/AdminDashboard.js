import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [monuments, setMonuments] = useState([]);
  const [newMonument, setNewMonument] = useState({ name: '', description: '', imageUrl: '' });

  // Fetch monuments from the backend
  useEffect(() => {
    const fetchMonuments = async () => {
      try {
        const response = await axios.get('/api/monuments'); // Fetch monuments from the backend
        setMonuments(response.data);
      } catch (error) {
        console.error('Error fetching monuments:', error);
      }
    };
    fetchMonuments();
  }, []);

  // Handle input changes for new monument
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMonument({ ...newMonument, [name]: value });
  };

  // Add a new monument
  const handleAddMonument = async () => {
    try {
      const response = await axios.post('/api/monuments', newMonument); // Add a new monument
      setMonuments([...monuments, response.data]);
      setNewMonument({ name: '', description: '', imageUrl: '' }); // Reset form
    } catch (error) {
      console.error('Error adding monument:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Add New Monument Form */}
      <div className="add-monument-form">
        <h4>Add New Monument</h4>
        <input
          type="text"
          name="name"
          placeholder="Monument Name"
          value={newMonument.name}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Monument Description"
          value={newMonument.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newMonument.imageUrl}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMonument}>Add Monument</button>
      </div>

      {/* Display List of Monuments */}
      <div className="monuments-list">
        <h4>Monuments List</h4>
        {monuments.length > 0 ? (
          <ul>
            {monuments.map((monument) => (
              <li key={monument.id}>
                <strong>{monument.name}</strong> - {monument.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No monuments added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
