import React from 'react';
import '../App.css';
import DreamOn from '../assets/dreamon.png';
import DishHunt from '../assets/dishhunt.png';
import BucketList from '../assets/bucketlist.jpg';
import TimeKiller from '../assets/timekiller.png';
import MadeWithLove from '../assets/MadeWithLove.png';
import Bunnyville from '../assets/Bunnyville.png';
import TheJourney from '../assets/TheJourney.png';
import WeatherDashboard from '../assets/weather.png';
import MyPortfolio from '../assets/Portfolio.png';
import talkcode2me from '../assets/talkcode2me_blk.png';


const Portfolio = () => {
  return (
    <div>
      <div>
        <header style={{ width: '100%', marginTop: '11%' }} className="header-center">
          <div className="header-container">
            <img
              src={MyPortfolio}
              alt="MyPortfolio"
              className="header"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </header>

        <div className="portfolio-section">

          <div className="portfolio-item" style={{ backgroundColor: 'white' }} >
            <a href="https://github.com/WHT-RBT/06-Side-APIs-Challenge-Weather-Dashboard.git">
              <img src={WeatherDashboard} alt="WeatherDashboard" className="resized-image" />
            </a>
          </div>


          <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
            <a href="https://github.com/WHT-RBT/Dish-Hunt.git">
              <img src={DishHunt} alt="DishHunt" className="resized-image" />
            </a>
          </div>

          <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
            <a href="https://github.com/WHT-RBT/TimeKillerProject">
              <img src={TimeKiller} alt="TimeKiller" className="resized-image" />
            </a>
          </div>

          <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
            <a href="https://wht-rbt.github.io/React-BucketList/">
              <img src={BucketList} alt="BucketList" className="resized-image" />
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
          <div className="portfolio-item" style={{ backgroundColor: 'white' }}>
            <a href="https://talkcode2me.com">
              <img src={talkcode2me} alt="talkcode2me" className="resized-image" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portfolio;
