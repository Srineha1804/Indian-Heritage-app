// src/pages/ArtsPage.js
import React from 'react';
import './ArtsPage.css';

const ArtsPage = () => {
  return (
    <div className="arts-page">
    <h2 class="yellow-text">Traditional Arts and Crafts</h2>
      <div className="arts-gallery">
        <div className="art-item">
        <a href="https://ruralhandmade.com/blog/what-is-the-handloom-weaving-technique" target="_blank" rel="noopener noreferrer">
          <img src="/images/handloom.png" alt="Handloom Craft" />
          <h3>Handloom Weaving</h3>
          </a>
          <p>Handloom weaving is a traditional craft that creates beautiful textiles with intricate designs.</p>
        </div>
        <div className="art-item">
          <a href="https://www.homesteadpottery.com/articles-homestead-pottery/an-introduction-to-pottery/" target="_blank" rel="noopener noreferrer">
          <img src="/images/pottery.png" alt="Pottery Craft" />
          <h3>Pottery</h3>
          </a>
          <p>Traditional pottery involves creating beautiful pots, bowls, and other items from clay.</p>
        </div>
        <div className="art-item">
        <a href="https://www.jagranjosh.com/general-knowledge/list-of-folk-paintings-of-india-1532091333-1"target="_blank" rel="noopener noreferrer">
          <img src="/images/painting.png" alt="Painting Craft" />
          <h3>Folk Painting</h3>
          </a>
          <p>Folk paintings represent the vibrant cultural heritage through unique regional art styles.</p>
        </div>
        <div className="art-item">
          <a href="https://en.wikipedia.org/wiki/Madhubani_art" target="_blank" rel="noopener noreferrer">
          <img src="/images/madhubani.png" alt="Madhubani Painting" />
          <h3>Madhubani Painting</h3>
          </a>
          <p>Madhubani painting, from Bihar, uses natural dyes and depicts mythology and folklore in vivid colors.</p>
        </div>
        <div className="art-item">
          <a href="https://en.wikipedia.org/wiki/Woodblock_printing" target="_blank" rel="noopener noreferrer">
          <img src="/images/block-printing.png" alt="Block Printing" />
          <h3>Block Printing</h3>
          </a>
          <p>Block printing is an ancient textile printing method from Rajasthan, using carved wooden blocks to create patterns.</p>
        </div>
        <div className="art-item">
          <a href="https://en.wikipedia.org/wiki/Bambooworking" target="_blank" rel="noopener noreferrer">
          <img src="/images/bamboo-work.png" alt="Bamboo Work" />
          <h3>Bamboo Work</h3>
          </a>
          <p>Bamboo crafts are popular in North-East India, where artisans create baskets, furniture, and decorative items.</p>
        </div>
      </div>
    </div>
  );
};

export default ArtsPage;
