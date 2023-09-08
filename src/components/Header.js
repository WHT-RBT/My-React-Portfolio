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
        <img src={logo} alt="Logo" className="logo" style={{ width: '60%', height: 'auto', margin: '0px', position: 'absolute', top: '8%', left: '0' }} />
      {showHummingbird && (
        <video id="HummingbirdVideo" muted autoPlay style={{ width: '40%', height: 'auto', margin: '0px', position: 'absolute', top: '0', right: '0' }}>
          <source src={hummingbirdVideo} type="video/mp4" />
        </video>
      )}
    </header>
  );
};

export default Header;
