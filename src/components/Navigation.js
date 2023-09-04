import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import resumePDF from '../assets/Resume_Lavina.pdf';
import '../App.css';

const Navigation = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const audioRef = useRef(null); 

    const tracks = [
        "../assets/song1.mp3",
        "../assets/song2.mp3",
        "../assets/song3.mp3",
        "../assets/song4.mp3",
        "../assets/song5.mp3",
        "../assets/song6.mp3",
    ];

    const playAudio = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pauseAudio = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    };

    return (
        <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, border: '1px solid rgb(133, 105, 105)', alignItems: "center", justifyContent: "center" }} >
            <Link to="aboutMe" smooth={true} duration={1111} offset={-50} style={{ width: '100px', height: '30px' }}>
                About Me
            </Link>
            <Link to="portfolio" smooth={true} duration={1111} offset={-50} style={{ width: '100px', height: '30px' }}>
                Portfolio
            </Link>
            <Link to="contact" smooth={true} duration={1111} offset={-50} style={{ width: '100px', height: '30px' }}>
                Contact
            </Link>
            <a href={resumePDF} download="Resume_Lavina.pdf" className="resume-download" style={{ width: "100px", height: "8px", border: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                Get Resume
            </a>
            <div className="social-icons" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <a href="https://github.com/WHT-RBT" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i> 
                </a>
                <a href="https://www.linkedin.com/in/lavinacastillo" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
            <audio ref={audioRef} src={tracks[currentTrackIndex]}></audio>  
            <button onClick={isPlaying ? pauseAudio : playAudio} className="audio-control">
                {isPlaying ? "Pause" : "Play"}
            </button>
            <button onClick={nextTrack}>Next</button>

        </nav>
    );
};

export default Navigation;
