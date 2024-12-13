import React, { useEffect, useState } from 'react';
import '../styles/phil.css';

const Phil = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation for better effect after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay in milliseconds (0.1s delay)

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`phil-container ${isVisible ? 'slide-up' : ''}`}>
      <div className="phil-box">
        <img
          src={`${process.env.PUBLIC_URL}/phil.png`}
          alt="Phil"
          className="phil-image"
        />
        <div className="phil-text">
          <h2>Phil</h2>
          <p>
            An exceptionally passionate and top-tier FPS streamer, known for his versatility across various platforms
            and PC shooting games. His pinpoint accuracy and unmatched game sense set him apart from others.
            Additionally, his love for basketball may play a significant role in shaping his strategic approach and
            quick reflexes in gaming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phil;