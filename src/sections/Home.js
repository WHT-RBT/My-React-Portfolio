import React, { useState } from 'react';
import flowersImage from '../assets/flowers.jpg'; 

const Home = () => {
    const [showFlowers] = useState(true);

    return (
        <div className="home-container" >
            <div className="Flowers-section" style={{ backgroundColor: 'white', border: 'none', display: 'flex', alignItems: 'flex-start' }}>
                {showFlowers && <div className="Flowers"></div>}
            </div>
            <div className="image-section" style={{ backgroundImage: `url(${flowersImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '50vh' }}>
            </div>
        </div>
    );
};

export default Home;
