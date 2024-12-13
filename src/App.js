import React from 'react';
import Header from "./components/Header";
import './styles/App.css';
import Steven from './components/steven'

function App() {
  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.welcomeSection}>
        <h2 style={styles.welcomeTitle}>Welcome to Zenith8</h2>
        <p style={styles.welcomeText}>Come and meet the team consisting of a bunch of hoohas.</p>
      </div>

      <Steven />

    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(to bottom right, #121C84, #8278DA)',
    color: '#e0e0e0', // Light text color for contrast
    fontFamily: 'Arial, sans-serif',
    height: '100vh', // Full viewport height
    overflowY: 'scroll', // Enable scrolling
  },
  welcomeSection: {
    padding: '80px 20px', // Add more space around the welcome section
    textAlign: 'center',  // Center the content
    maxWidth: '100%',    // Limit the width of the content
    margin: '0 auto',     // Center the content horizontally
  },
  welcomeTitle: {
    fontSize: '100px',
    fontWeight: 'bold',
    color: '#fff',
    textFillColor: 'transparent',
    marginBottom: '20px',
    marginTop: '10px',
    padding: '5px',
    textShadow: '0 0 5px #ff4500, 0 0 10px #ff6347, 0 0 15px #ff0, 0 0 20px #ff4500', // Glow effect for fire
    animation: 'flicker 1.5s infinite alternate', // Apply flickering animation
  },
  welcomeText: {
    fontSize: '20px',       // Smaller font size for the text
    color: '#b0b0b0',       // Slightly lighter text for the description
    marginTop: '20px',      // Space between the title and the text
    lineHeight: '1.6',      // Increase line height for better readability
    maxWidth: '700px',      // Limit width to prevent text from stretching too far
    margin: '0 auto',       // Center the text horizontally
  },
};

const stylesAnimation = `
  @keyframes flicker {
    0% {
      text-shadow: 0 0 8px #ff4500, 0 0 15px #ff6347, 0 0 20px #ff0;
    }
    10% {
      text-shadow: 0 0 12px #ff4500, 0 0 25px #ff6347, 0 0 30px #ff0;
    }
    20% {
      text-shadow: 0 0 15px #ff4500, 0 0 30px #ff6347, 0 0 35px #ff0;
    }
    30% {
      text-shadow: 0 0 12px #ff4500, 0 0 25px #ff6347, 0 0 30px #ff0;
    }
    40% {
      text-shadow: 0 0 8px #ff4500, 0 0 15px #ff6347, 0 0 20px #ff0;
    }
    50% {
      text-shadow: 0 0 10px #ff4500, 0 0 20px #ff6347, 0 0 25px #ff0;
    }
    60% {
      text-shadow: 0 0 12px #ff4500, 0 0 25px #ff6347, 0 0 30px #ff0;
    }
    70% {
      text-shadow: 0 0 8px #ff4500, 0 0 15px #ff6347, 0 0 20px #ff0;
    }
    80% {
      text-shadow: 0 0 15px #ff4500, 0 0 30px #ff6347, 0 0 35px #ff0;
    }
    90% {
      text-shadow: 0 0 10px #ff4500, 0 0 20px #ff6347, 0 0 25px #ff0;
    }
    100% {
      text-shadow: 0 0 8px #ff4500, 0 0 15px #ff6347, 0 0 20px #ff0;
    }
  }
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = stylesAnimation;
document.head.appendChild(styleTag);

export default App;
