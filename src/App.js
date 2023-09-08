import React, { useState, useEffect, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { Element, scroller } from 'react-scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ErrorBoundary from './ErrorBoundary';
import Home from './sections/Home';
import EntryPage from './sections/EntryPage';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import song1 from './assets/song1.mp3';

const App = () => {
  const [showEntryPage, setShowEntryPage] = useState(true);
  const audioRef = useRef(null);
  const [audioStarted, setAudioStarted] = useState(false);


  useEffect(() => {
    if (!showEntryPage && audioStarted) {
      audioRef.current.play().catch(error => console.log("Audio play failed:", error));
    }
  },[audioStarted, showEntryPage]);

  const handleEntryPageClick = () => {
    setShowEntryPage(false);
    setAudioStarted(true);
    setTimeout(() => {
      scroller.scrollTo('header', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }, 100);
  };

  return (
    <div className="App">
      {showEntryPage ? (
        <>
          <ErrorBoundary>
            <EntryPage onEnter={handleEntryPageClick} />
          </ErrorBoundary>
        </>
      ) : (        <>
          <Element name="header"></Element>
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <ErrorBoundary>
            <Navigation />
          </ErrorBoundary>
          <Element name="home">
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          </Element>
          <Element name="aboutMe">
            <ErrorBoundary>
              <AboutMe />
            </ErrorBoundary>
          </Element>
          <Element name="portfolio">
            <ErrorBoundary>
              <Portfolio />
            </ErrorBoundary>
          </Element>
          <Element name="contact">
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          </Element>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
          <audio ref={audioRef} loop={false} className='hidden'>
            <source src={song1} type='audio/mp3' />
          </audio>
        </>
      )}
    </div>
  );
};

export default App;
