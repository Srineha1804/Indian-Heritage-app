// src/components/CultureDetails.js
import React from 'react';
import './CultureDetails.css';

const CultureDetails = ({ cultureName, description, images }) => (
  <div className="culture-details">
    <h2>{cultureName}</h2>
    <div className="culture-images">
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`${cultureName} culture ${index + 1}`} className="culture-image" />
      ))}
    </div>
    <p>{description}</p>
  </div>
);

export default CultureDetails;
