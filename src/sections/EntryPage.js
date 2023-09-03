import React, { useRef, useEffect, useState } from 'react';
import keyImage from '../assets/key.png';
import keyholeImage from '../assets/keyhole.png';
import Ripples from 'react-ripples';

const EntryPage = ({ onEnter }) => {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [started, setStarted] = useState(false);
    const [showRippleButton, setShowRippleButton] = useState(false);
    const songs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song5.mp3", "song6.mp3"];

    const handleKeyholeClick = () => {
        setStarted(true);
        if (videoRef.current && audioRef.current) {
            videoRef.current.play().catch(error => console.log("Video play failed:", error));
            audioRef.current.play().catch(error => console.log("Audio play failed:", error));
        }
    };

    useEffect(() => {
        if (started) {
            const handleVideoEnd = () => {
                setShowRippleButton(true);
            };
    
            const currentVideoRef = videoRef.current; // Store current ref in a variable
    
            if (currentVideoRef) {
                currentVideoRef.addEventListener('ended', handleVideoEnd);
    
                // Cleanup function
                return () => {
                    if (currentVideoRef) {
                        currentVideoRef.removeEventListener('ended', handleVideoEnd);
                    }                };
            }
        }
    }, [started]);

    const handleRippleClick = () => {
        onEnter(); // Navigate to Home
    };

    return (
        <div className="entry-page" style={{ backgroundColor: 'black' }}>
            {!started ? (
                <div className="keyhole-container" 
                     onClick={handleKeyholeClick} 
                     style={{ cursor: `url(${keyImage}), auto` }}>
                    <img src={keyholeImage} alt="" />
                    <span className="unlock-text">Unlock Me</span>
                </div>
            ) : (
                <>
                    <video ref={videoRef} muted className="video-background">
                        <source src="/assets/entryvideo.mp4" type="video/mp4" />
                    </video>
                    <audio ref={audioRef} loop={false} className="hidden">
                        <source src={`/assets/${songs[0]}`} type="audio/mp3" />
                    </audio>
                    {showRippleButton && (
                        <Ripples color="#007bff">
                            <button className="ripple-button" onClick={handleRippleClick}>
                                Enter Here
                            </button>
                        </Ripples>
                    )}
                </>
            )}
        </div>
    );
};

export default EntryPage;
