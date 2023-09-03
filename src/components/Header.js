import React from 'react';
import logo from '../assets/logo.png';
import hummingbird from '../assets/hummingbird.mp4';  

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <img src={hummingbird} alt="Hummingbird Animation" className="hummingbird" />
    </header>
  );
};

export default Header;
