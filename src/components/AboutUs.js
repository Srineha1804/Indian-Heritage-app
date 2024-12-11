import React from 'react';

function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Indian Heritage</h1>
      <p style={styles.text}>
        India is a land of profound diversity, known for its rich heritage and cultural legacy that spans thousands of years.
        This heritage encompasses art, architecture, music, dance, traditions, languages, and festivals that vary widely across the country's
        different regions. From the majestic temples of South India to the grand forts of Rajasthan and the spiritual centers along the Ganges River,
        India reflects a civilization that has cherished its cultural roots while embracing the present.
      </p>
      
      <h2 style={styles.subheader}>Cultural Diversity</h2>
      <p style={styles.text}>
        With over 2,000 distinct ethnic groups and 1,600 spoken languages, India is one of the most culturally diverse countries in the world.
        Every region in India has its unique customs, cuisine, attire, and dialect. Major festivals like Diwali, Eid, Christmas, and Holi are
        celebrated with great enthusiasm, showcasing the unity in diversity that is a hallmark of Indian culture.
      </p>

      <h2 style={styles.subheader}>Historical Monuments</h2>
      <p style={styles.text}>
        Indian architecture stands as a testimony to the country’s illustrious past. From the ancient carvings of Ajanta and Ellora caves to the
        intricate marble inlay of the Taj Mahal, India's monuments reflect its historical and artistic heritage. Many monuments such as the
        Qutub Minar, Red Fort, Gateway of India, and Charminar have become symbols of India's historical richness and architectural excellence.
      </p>

      <h2 style={styles.subheader}>Traditional Arts and Crafts</h2>
      <p style={styles.text}>
        Indian art forms, such as classical dance (Bharatanatyam, Kathak, Odissi) and music (Hindustani and Carnatic), play a vital role in the
        cultural landscape. The country is also renowned for its handcrafted textiles, pottery, jewelry, and painting styles like Madhubani and
        Warli, which are reflections of regional identities and traditional knowledge passed down through generations.
      </p>

      <h2 style={styles.subheader}>Indian Spirituality</h2>
      <p style={styles.text}>
        India is known as the birthplace of major religions such as Hinduism, Buddhism, Jainism, and Sikhism. Spirituality is deeply rooted in Indian
        culture, with numerous pilgrimage sites, temples, and ashrams that attract visitors seeking inner peace and enlightenment. Cities like
        Varanasi, Rishikesh, and Bodh Gaya are revered for their spiritual significance.
      </p>
      
      <h2 style={styles.subheader}>Heritage Preservation</h2>
      <p style={styles.text}>
        Efforts to preserve India's cultural heritage are ongoing, with numerous monuments being protected by UNESCO as World Heritage Sites.
        Institutions and organizations are working to document and preserve traditional art forms, languages, and crafts, ensuring that
        India's legacy continues for future generations.
      </p>
      
      <p style={styles.footerText}>
        Discover the wonders of Indian culture and heritage, a land where the past meets the present, creating a vibrant and timeless mosaic of traditions and innovation.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.8',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2.5em',
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subheader: {
    fontSize: '1.8em',
    color: '#4A90E2',
    marginTop: '20px',
  },
  text: {
    fontSize: '1.1em',
    color: '#555',
    marginBottom: '15px',
  },
  footerText: {
    fontSize: '1.2em',
    color: '#333',
    textAlign: 'center',
    marginTop: '20px',
    fontWeight: 'bold',
  }
};

export default AboutUs;
