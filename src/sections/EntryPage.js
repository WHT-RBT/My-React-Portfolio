import React, { useRef, useEffect, useState } from 'react';
import keyImage from '../assets/key.png';
import keyholeImage from '../assets/keyhole.png';
import entryVideo from '../assets/entryvideo.mp4';
import song2 from '../assets/song2.mp3';

const EntryPage = ({ onEnter }) => {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const [started, setStarted] = useState(false);

    const handleKeyholeClick = () => {
        setStarted(true);
    };

    useEffect(() => {
        if (started && videoRef.current && audioRef.current) {
            videoRef.current.play().catch(error => console.log("Video play failed:", error));
            audioRef.current.play().catch(error => console.log("Audio play failed:", error));
        }
    }, [started]);

    useEffect(() => {
        const handleVideoEnd = () => {
            onEnter()
        };

        const currentVideoRef = videoRef.current;

        if (currentVideoRef) {
            currentVideoRef.addEventListener('ended', handleVideoEnd);

            return () => {
                currentVideoRef.removeEventListener('ended', handleVideoEnd);
            };
        }
    },);

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
                    <video ref={videoRef} muted className="video">
                        <source src={entryVideo} type="video/mp4" />
                    </video>
                    <audio ref={audioRef} loop={false} className="hidden">
                        <source src={song2} type="audio/mp3" />
                    </audio>
                </>
            )}
        </div>
    );
};

export default EntryPage;