import React from 'react';
import './VirtualTours.css';

const VirtualTours = () => {
  // Functions to open virtual tour links in a new tab
  const openTajMahalLink = () => {
    window.open("https://artsandculture.google.com/story/taj-mahal-a-tour-from-the-top/zAUxtGbI2DyODQ?hl=en", "_blank");
  };

  const openRedFortLink = () => {
    window.open("https://artsandculture.google.com/streetview/red-fort/TAGwBR4r9ZE7dg?sv_lng=77.23728456835119&sv_lat=28.656020528635334&sv_h=73.97405412382334&sv_p=9.548637364402964&sv_pid=6fhnf129W3s4sKLASuWk3Q&sv_z=0.9999999999999997", "_blank");
  };
  const openQutubMinarLink = () => {
    window.open("https://artsandculture.google.com/story/JwVxNHO3C07RIA?hl=en", "_blank");
  };

  return (
    <div className="virtual-tours-container">
      <h2>Virtual Tours</h2>
      <p class="yellow-text">Click on the images below to take virtual tours of famous monuments.</p>
      
      
      <div className="tour-images">
        <div className="tour-item">
          <img 
            src="/images/tajmahal.png" 
            alt="Taj Mahal" 
            className="tour-image" 
            onClick={openTajMahalLink} // Opens Taj Mahal tour link
          />
          <p class="yellow-text">Taj Mahal</p>
        </div>
        
        <div className="tour-item">
          <img 
            src="/images/Redfort.png" 
            alt="Red Fort" 
            className="tour-image" 
            onClick={openRedFortLink} // Opens Red Fort tour link
          />
          <p class="yellow-text">Red Fort</p>
        </div>
        <div className="tour-item">
          <img 
            src="/images/Qutubminar.png" 
            alt="Qutub Minar" 
            className="tour-image" 
            onClick={openQutubMinarLink} // Opens Red Fort tour link
          />
          <p class="yellow-text">Qutub Minar</p>
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;
