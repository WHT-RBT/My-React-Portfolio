import React, { useState, useEffect } from 'react'; 
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { Link, Element } from 'react-scroll';
import Header from './components/Header';
import ErrorBoundary from './ErrorBoundary'; 
import EntryPage from './sections/EntryPage';
import Home from './sections/Home';
import Navigation from './components/Navigation';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import keyImage from './assets/key.png';


const App = () => {
  const [showEntryPage, setShowEntryPage] = useState(true);

  useEffect(() => {
    // Create a new style element
    const styleElement = document.createElement('style');
    // Set the style content to set the cursor for the body element
    styleElement.innerHTML = `body { cursor: url(${keyImage}), auto; }`;
    // Append the style element to the head of the document
    document.head.appendChild(styleElement);

    // Cleanup: remove the style element when the component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  const handleEntryPageClick = () => {
    setShowEntryPage(false);
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
          <nav>
            <Link to="home" smooth={true}>Home</Link>
            <Link to="aboutMe" smooth={true}>About Me</Link>
            <Link to="portfolio" smooth={true}>Portfolio</Link>
            <Link to="contact" smooth={true}>Contact Me</Link>
          </nav>
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
