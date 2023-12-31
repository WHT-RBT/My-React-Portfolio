import React, { useEffect, useState } from 'react';
import profileImage from '../assets/profile-image.jpg';
import unicornVideo from '../assets/unicorn.mp4';
import About from '../assets/AboutMe.png';

const AboutMe = () => {
    const [showUnicorn, setShowUnicorn] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowUnicorn(false), 5000);
    }, []);

    const [videoPlaying, setVideoPlaying] = useState(true);

    const handleVideoEnded = () => {
        const videoElement = document.getElementById('aboutMeVideo');
        setVideoPlaying(false);

        setTimeout(() => {
            videoElement.play();
            setVideoPlaying(true);
        }, 15000);  // waits 15 seconds
    };

    return (
<div className="about-me">
            <img
                src={About}
                alt="About"
                className="about-me-header"
                style={{
                    position: 'absolute',
                    top: '3%', 
                    left: '1%', 
                    width: '30%', 
                    height: 'auto',
                }}
            />
                        <div className="top-section">
                <div className={`profile-image ${showUnicorn ? 'unicorn' : ''}`}>
                    <img src={profileImage} alt="Profile" style={{ width: '20%', height: 'auto', borderRadius: '3%', backgroundColor: 'none' }} />
                </div>

                <div className="text-blocks" style={{ width: '40%', height: 'auto' }}>
                    <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '5px', fontSize: '16px', fontStyle: 'italic', color: '#000' }}>Thank you for visiting my Portfolio page. I am excited you are here. A little about myself, I love being creative and enjoying sharing my creations, in any way possible, whether it's crafts, stories, designing, and pretty much anything I can use to express myself. <br /><br />I'm currently studying for a Certification in Full Stack Web Development at an ASU Bootcamp and I couldn't be more excited about this new journey! <br /><br />With a diverse background and an unyielding passion for learning, I'm eager to share my unique skills. Friendly, adaptable, and committed to growth—I can't wait to see where this new career path takes me!</p>
                </div>
            </div>
            <div className="bottom-section">
                <video id="aboutMeVideo" muted loop={videoPlaying} autoPlay={videoPlaying} onEnded={handleVideoEnded}>
                    <source src={unicornVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default AboutMe;
