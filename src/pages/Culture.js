import React, { useState, useEffect } from 'react';
import './Culture.css';

const Culture = () => {
    const [isFestivalVisible, setIsFestivalVisible] = useState(false);

    // Scroll event handler
    const handleScroll = () => {
        const festivalsSection = document.getElementById("festivals");
        const rect = festivalsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            setIsFestivalVisible(true); // Trigger visibility when section is in view
        }
    };

    // Add event listener on component mount and remove on unmount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="culture-container">
            <h1>Indian Temples and Festivals</h1>

            {/* Temples Section */}
            <section className="temples">
                <h2 class="yellow-text">Famous Temples of India</h2>
                <div className="image-row">
                    <div className="image-card">
                    <a href="https://en.wikipedia.org/wiki/Kashi_Vishwanath_Temple" target="_blank" rel="noopener noreferrer">
                        <img src="/images/kashi.png" alt="Kashi Vishwanath Temple" />
                        </a>
                        <div className="card-description">
                        <h3>Kashi Vishwanath</h3>
                            Kashi Vishwanath Temple, located in Varanasi, is one of the most famous Hindu temples in India.
                        </div>
                    </div>
                    <div className="image-card">
                    <a href="https://en.wikipedia.org/wiki/Churches_and_convents_of_Goa" target="_blank" rel="noopener noreferrer">
                        <img src="/images/goa.png" alt="Goa Churches" />
                        </a>
                        <div className="card-description">
                        <h3>Goa's churches</h3>
                            Goa's churches, such as the Basilica of Bom Jesus, are a reflection of India's Christian heritage.
                        </div>
                    </div>
                    <div className="image-card">
                    <a href="https://en.wikipedia.org/wiki/Jama_Masjid,_Delhi" target="_blank" rel="noopener noreferrer">
                        <img src="/images/jama.png" alt="Jama Masjid" />
                        </a>
                        <div className="card-description">
                        <h3>Jama Masjid</h3>
                            Jama Masjid in Delhi is one of the largest and most magnificent mosques in India.
                        </div>
                    </div>
                </div>
            </section>

            {/* Festivals Section with Scroll Effect */}
            <section
                id="festivals"
                className={`festivals ${isFestivalVisible ? 'visible' : ''}`}
            >
                <h2 class="yellow-text">Famous Festivals in India</h2>

                {/* Festival Cards Layout */}
                <div className="image-row">
                    <div className="image-card">
                    <a href="https://en.wikipedia.org/wiki/Diwali" target="_blank" rel="noopener noreferrer">
                        <img src="/images/diwali.png" alt="Diwali Festival" />
                        </a>
                        <div className="card-description">
                            <h3>Diwali (Festival of Lights)</h3>
                            Diwali is one of the most important Hindu festivals, celebrated with immense joy.
                        </div>
                    </div>
                    <div className="image-card">
                    <a href="https://en.wikipedia.org/wiki/Holi" target="_blank" rel="noopener noreferrer">
                        <img src="/images/holi.png" alt="Holi Festival" />
                        </a>
                        <div className="card-description">
                            <h3>Holi (Festival of Colors)</h3>
                            Holi marks the arrival of spring and celebrates the divine love of Lord Krishna and Radha.
                        </div>
                    </div>
                    <div className="image-card">
                    <a href="https://en.wikipedia.org/wiki/Navaratri" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Navaratri.png" alt="Navaratri Festival" />
                        </a>
                        <div className="card-description">
                            <h3>Navaratri</h3>
                            Navaratri is a festival dedicated to Goddess Durga, involving fasting and cultural performances.
                        </div>
                    </div>
                    <div className="image-card">
                    <a href="https://en.wikipedia.org/wiki/Christmas" target="_blank" rel="noopener noreferrer">
                        <img src="/images/christmas.png" alt="Christmas" />
                        </a>
                        <div className="card-description">
                            <h3>Christmas</h3>
                            Celebrates the birth of Jesus Christ with joy, feasts, and decorations.
                        </div>
                    </div>
                    <div className="image-card">
                    <a href="https://en.wikipedia.org/wiki/Muharram" target="_blank" rel="noopener noreferrer">
                        <img src="/images/muharram.png" alt="Muharram" />
                        </a>
                        <div className="card-description">
                            <h3>Muharram</h3>
                            Observed as a day of mourning to honor the martyrdom of Imam Hussain.
                        </div>
                    </div>
                    <div className="image-card">
                    <a href="https://en.wikipedia.org/wiki/Makar_Sankranti" target="_blank" rel="noopener noreferrer">
                        <img src="/images/sankranti.png" alt="Sankranti Festival" />
                        </a>
                        <div className="card-description">
                            <h3>Sankranti (Harvest Festival)</h3>
                            Celebrated in January, Sankranti marks the harvest season, especially in Telugu-speaking regions. Festivities include colorful kites, bonfires, and traditional dances.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Culture;
