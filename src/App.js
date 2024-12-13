import React from 'react';
import Header from "./components/Header";
import './styles/App.css';
import Steven from './components/steven';
import Phil from './components/phil';

function App() {
  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.welcomeSection}>
        <h2 style={styles.welcomeTitle}>Welcome to Zenith8</h2>
        <p style={styles.welcomeText}>Come and meet the team consisting of a bunch of hoohas.</p>
      </div>

      <Steven />
      <Phil />

    </div>
  );
}

const styles = {
  container: {
    background: '#0f0c29',
    background: '-webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    color: '#e0e0e0',
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    overflowY: 'scroll',
  },
  welcomeSection: {
    padding: '80px 20px',
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
      text-shadow: 0 0 8px #8a2be2, 0 0 15px #4b0082, 0 0 20px #0000ff;
    }
    10% {
      text-shadow: 0 0 12px #8a2be2, 0 0 25px #4b0082, 0 0 30px #0000ff;
    }
    20% {
      text-shadow: 0 0 15px #8a2be2, 0 0 30px #4b0082, 0 0 35px #0000ff;
    }
    30% {
      text-shadow: 0 0 12px #8a2be2, 0 0 25px #4b0082, 0 0 30px #0000ff;
    }
    40% {
      text-shadow: 0 0 8px #8a2be2, 0 0 15px #4b0082, 0 0 20px #0000ff;
    }
    50% {
      text-shadow: 0 0 10px #8a2be2, 0 0 20px #4b0082, 0 0 25px #0000ff;
    }
    60% {
      text-shadow: 0 0 12px #8a2be2, 0 0 25px #4b0082, 0 0 30px #0000ff;
    }
    70% {
      text-shadow: 0 0 8px #8a2be2, 0 0 15px #4b0082, 0 0 20px #0000ff;
    }
    80% {
      text-shadow: 0 0 15px #8a2be2, 0 0 30px #4b0082, 0 0 35px #0000ff;
    }
    90% {
      text-shadow: 0 0 10px #8a2be2, 0 0 20px #4b0082, 0 0 25px #0000ff;
    }
    100% {
      text-shadow: 0 0 8px #8a2be2, 0 0 15px #4b0082, 0 0 20px #0000ff;
    }
  }
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = stylesAnimation;
document.head.appendChild(styleTag);

export default App;
