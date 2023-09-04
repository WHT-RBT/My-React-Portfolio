import React, { useState, useEffect } from 'react'; 
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { Element, scroller } from 'react-scroll';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
// import AudioPlayer from './components/AudioPlayer';
import ErrorBoundary from './ErrorBoundary'; 
import Home from './sections/Home';
import EntryPage from './sections/EntryPage';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';


const App = () => {
  const [showEntryPage, setShowEntryPage] = useState(true);

    useEffect(() => {
      const cursorGlitter = document.createElement('div');
      cursorGlitter.className = 'cursor-glitter';
      document.body.appendChild(cursorGlitter);

 // Cleanup function to remove the glitter element
 return () => {
  document.body.removeChild(cursorGlitter);
};
}, []);

const handleEntryPageClick = () => {
  setShowEntryPage(false); 
  setTimeout(() => {
    scroller.scrollTo('header', { 
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }, 100); // delay to make sure portfolio section shows
};
  return (
    <div className="App">
      {showEntryPage ? (
        <ErrorBoundary>
          <EntryPage onEnter={handleEntryPageClick} />
        </ErrorBoundary>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
