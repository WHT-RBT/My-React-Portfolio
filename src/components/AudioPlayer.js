import React, { useState, useRef } from 'react';
import song1 from '../assets/song1.mp3';
import song2 from '../assets/song2.mp3';
import song3 from '../assets/song3.mp3';
import song4 from '../assets/song4.mp3';
import song5 from '../assets/song5.mp3';
import song6 from '../assets/song6.mp3';

const AudioPlayer = () => {
    const songs = [song1, song2, song3, song4, song5, song6];
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const stopHandler = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    const nextSongHandler = () => {
        const nextIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(nextIndex);
        if (isPlaying) {
            audioRef.current.src = songs[nextIndex];
            audioRef.current.play();
        }
    };

    return (
        <div className="audio-player">
            <audio ref={audioRef} src={songs[currentSongIndex]} />
            <button onClick={playPauseHandler}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={stopHandler}>Stop</button>
            <button onClick={nextSongHandler}>Next Song</button>
        </div>
    );
};

export default AudioPlayer;
