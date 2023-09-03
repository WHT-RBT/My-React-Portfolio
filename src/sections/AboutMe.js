import React, { useEffect, useState } from 'react';
import profileImage from '../assets/profile-image.jpg';
import unicornVideo from '../assets/unicorn.mp4';        

const AboutMe = () => {
    const [showRipple, setShowRipple] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowRipple(false), 5000);  
    }, []);

    const handleVideoEnded = (event) => {
        const video = event.target;
        video.pause();
    };

    return (
        <div className="about-me">
            <div className="top-section">
                <div className={`profile-image ${showRipple ? 'ripple' : ''}`}>
                    <img src={profileImage} alt="Profile" />
                </div>
                <div className="text-blocks">
                    {/* Your text content here */}
                </div>
            </div>
            <div className="bottom-section">
                <video id="aboutMeVideo" muted autoPlay onEnded={handleVideoEnded}>
                    <source src={unicornVideo} type="video/quicktime" />
                </video>
            </div>
        </div>
    );
};

export default AboutMe;
