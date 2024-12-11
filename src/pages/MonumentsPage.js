// src/pages/MonumentsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MonumentsPage.css';

const monuments = [
  { id: 1, name: 'Taj Mahal', description: 'The epitome of love and Mughal architecture', image: '/images/tajmahal.png' },
  { id: 2, name: 'Red Fort', description: 'Historic fort in Delhi', image: '/images/Redfort.png' },
  { id: 3, name: 'Qutub Minar', description: 'World’s tallest brick minaret', image: '/images/Qutubminar.png' },
  { id: 4, name: 'Gateway of India', description: 'Iconic monument in Mumbai', image: '/images/Gatewayofindia.png' },
  { id: 5, name: 'Charminar', description: 'The pride of Hyderabad', image: '/images/Charminar.png' },
  { id: 6, name: 'Mysore Palace', description: 'A stunning royal residence in Karnataka', image: '/images/mysore.png' },
  { id: 7, name: 'Sun Temple, Konark', description: 'A 13th-century temple dedicated to the Sun God, in Odisha', image: '/images/sun_temple.png' },
  { id: 8, name: 'Golconda Fort', description: 'A fortified citadel in Hyderabad with historical significance', image: '/images/Golconda_fort.png' },
  { id: 9, name: 'Victoria Memorial', description: 'A large marble building in Kolkata, dedicated to Queen Victoria', image: '/images/victoria_memorial.png' },
];

function MonumentsPage() {
  return (
    <div className="monuments-page" style={{ textAlign: 'center', padding: '30px' }}>
      <h2>Explore Indian Monuments</h2>
      <p>Select a monument to learn more about its history and significance!</p>
      <div className="monuments-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {monuments.map((monument) => (
          <div className="monument-card" key={monument.id} style={{
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <img src={monument.image} alt={monument.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>
              <Link to={`/monument/${monument.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                {monument.name}
              </Link>
            </h3>
            <p style={{ color: '#666', fontSize: '14px' }}>{monument.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonumentsPage;
