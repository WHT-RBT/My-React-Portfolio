import React, { useEffect, useState } from 'react';
import cloudsVideo from '../assets/clouds.mp4';

const Home = () => {
    const [showClouds, setShowClouds] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowClouds(false), 5000);
    }, []);

    const [videoPlaying, setVideoPlaying] = useState(true);

    const handleVideoEnded = () => {
        const videoElement = document.getElementById('HomeVideo'); // Corrected element ID
        setVideoPlaying(false);

        setTimeout(() => {
            videoElement.play();
            setVideoPlaying(true);
        }, 15000); // waits for 15 seconds
    };

    return (
        <div className="home-container">
            <div className="clouds-section" style={{ backgroundColor: 'white', border: 'none', display: 'flex', alignItems: 'flex-start' }}>
            {showClouds && <div className="clouds"></div>}
            </div>
            <div className="video-section" >
                <video id="HomeVideo" muted loop={videoPlaying} autoPlay={videoPlaying} onEnded={handleVideoEnded}>
                    <source src={cloudsVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Home;
