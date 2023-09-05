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
        setTimeout(toggleHummingbird, 5000); // hides after 5 secs
      }, 30000); // shows every 35 secs
      return () => {
        clearInterval(interval);
      };
    }, 15000); // 15 sec delay to hide video
  },);

  return (
    <header style={{ height: '480px' }}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" style={{ width: '900px', height: '340px' }} />
      </div>
      {showHummingbird && (
        <video id="HummingbirdVideo" muted autoPlay style={{ width: '800px', height: '451px' }}>
          <source src={hummingbirdVideo} type="video/mp4" />
        </video>
      )}
    </header>
  );
};

export default Header;
