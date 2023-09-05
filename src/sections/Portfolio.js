import React from 'react';
import '../App.css';
import DreamOn from '../assets/dreamon.png';
import DishHunt from '../assets/dishhunt.png';
import BucketList from '../assets/bucketlist.jpg';
import TimeKiller from '../assets/timekiller.png';
import MadeWithLove from '../assets/MadeWithLove.png';
import Bunnyville from '../assets/Bunnyville.png';
import TheJourney from '../assets/TheJourney.png';


const Portfolio = () => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://github.com/WHT-RBT/Dish-Hunt.git">
          <img src={DishHunt} alt="DishHunt" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://wht-rbt.github.io/React-BucketList/">
          <img src={BucketList} alt="BucketList" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://timekiller.com">
          <img src={TimeKiller} alt="TimeKiller" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://github1.com">
          <img src="/path/to/github1-image.jpg" alt="GitHub1" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://github2.com">
          <img src="/path/to/github2-image.jpg" alt="GitHub2" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://github3.com">
          <img src="/path/to/github3-image.jpg" alt="GitHub3" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://somethingelse.com">
          <img src="/path/to/somethingelse-image.jpg" alt="SomethingElse" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://www.barnesandnoble.com/w/bunnyville-the-alphabet-lm-castillo/1143847976?ean=2940160956442">
          <img src={Bunnyville} alt="Bunnyville" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://www.barnesandnoble.com/w/books/1143960930?ean=2940185934609">
          <img src={TheJourney} alt="TheJourney" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://madewithlovebylmc.etsy.com">
          <img src={MadeWithLove} alt="MadeWithLove" className="resized-image" />
        </a>
      </div>
      <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
        <a href="https://dreamonaz.com">
          <img src={DreamOn} alt="DreamOn" className="resized-image" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
