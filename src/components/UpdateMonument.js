import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import axios from 'axios';
import './UpdateMonument.css';

const UpdateMonument = () => {
  const { id } = useParams(); // Access route param 'id' using useParams hook
  const [updatedMonument, setUpdatedMonument] = useState({ name: '', description: '', imageUrl: '' });

  useEffect(() => {
    const fetchMonument = async () => {
      try {
        const response = await axios.get(`/api/monuments/${id}`);
        setUpdatedMonument(response.data); // Pre-fill form with current data
      } catch (error) {
        console.error('Error fetching monument:', error);
      }
    };
    fetchMonument();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMonument({ ...updatedMonument, [name]: value });
  };

  const handleUpdateMonument = async () => {
    try {
      const response = await axios.put(`/api/monuments/${id}`, updatedMonument);
      console.log('Updated monument:', response.data); // Debug log
      alert('Monument updated successfully!');
    } catch (error) {
      console.error('Error updating monument:', error);
      alert('Error updating monument.');
    }
  };

  const handleCancel = () => {
    // Navigate back to the previous page or to the admin dashboard
    window.history.back();
  };

  return (
    <div className="update-monument-form">
      <h4>Update Monument</h4>

      <input
        type="text"
        name="name"
        placeholder="Monument Name"
        className="form-control"
        value={updatedMonument.name}
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Monument Description"
        className="form-control"
        value={updatedMonument.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        className="form-control"
        value={updatedMonument.imageUrl}
        onChange={handleInputChange}
      />

      <div className="update-monument-buttons">
        <button onClick={handleUpdateMonument}>Update Monument</button>
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
      </div>

      <div className="update-monument-image-preview">
        {updatedMonument.imageUrl && (
          <div>
            <img src={updatedMonument.imageUrl} alt="Preview" />
            <p>Preview Image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateMonument;
