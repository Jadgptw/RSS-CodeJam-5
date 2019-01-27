import React from 'react';
import '../homePage/styles/background.css';

import backgroundImage from './images/homePageBG.jpg';

const Background =() => (
  <div className="background-Wrapper">
    <div className="background-BlackLine"></div>
    <img className="background-Image" src={backgroundImage} alt="background"/>
  </div>
);

export default Background;