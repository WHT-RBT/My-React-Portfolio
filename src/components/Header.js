import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import hummingbirdVideo from '../assets/hummingbird.mp4';

const Header = () => {
  const [showHummingbird, setShowHummingbird] = useState(true);

  const toggleHummingbird = () => {
    setShowHummingbird(!showHummingbird);
  };

useEffect(() => {
    setTimeout(() => {
      toggleHummingbird();
      const interval = setInterval(() => {
        toggleHummingbird();
        setTimeout(toggleHummingbird, 5000); // Hide after 5 seconds
      }, 25000); // Show every 35 seconds (5 seconds for playing + 30 seconds for waiting)
      return () => {
        clearInterval(interval);
      };
    }, 5000); // 5 second delay to hide to hide the video
  }, []);

  return (
    <header style={{ height: '450px' }}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" style={{ width: '800px', height: '270px' }} />
      </div>
      {showHummingbird && (
        <video id="HummingbirdVideo" muted autoPlay style={{ width: '800px', height: '450px' }}>
          <source src={hummingbirdVideo} type="video/mp4" />
        </video>
      )}
    </header>
  );
};

export default Header;
