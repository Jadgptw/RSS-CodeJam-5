import React from 'react';
import '../homePage/styles/LandingBlock.css';

import arrowImage from './images/arrowDown.png';

const LandingBlock = () => (
  <div className="landing-block">
    <div className="centralTitle">
      <h1 className='landing-title'>Фотографы Беларуси</h1>
      <p className='landing-underTitle'>библиотека</p>
    </div>
    <div className="MoreButton">
      <p className="MoreButton-text">ещё</p>
      <img className="MoreButton-img" src={arrowImage} alt="moreButton"/>
    </div>
  </div>
);

export default LandingBlock;