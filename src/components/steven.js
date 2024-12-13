import React, { useEffect, useState } from 'react';
import '../styles/steven.css';

const Steven = () => {
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
    <div className={`steven-container ${isVisible ? 'slide-up' : ''}`}>
      <div className="steven-box">
        <img
          src={`${process.env.PUBLIC_URL}/steven.png`}
          alt="Steven"
          className="steven-image"
        />
        <div className="steven-text">
          <h2>Steven Le</h2>
          <p>
            Steven is a versatile and passionate content creator, excelling in everything from gaming adventures to
            real-life experiments. He's the kind of guy you'd love to have around, especially if you're into food or exciting
            hobbies that revolve around action-packed experiences. He just can not last long :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steven;