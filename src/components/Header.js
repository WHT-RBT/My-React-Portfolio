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
      }, 30000); // Shows every 35 seconds
      return () => {
        clearInterval(interval);
      };
    }, 15000); // 15 second delay to hide video
  },);

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
