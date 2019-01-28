import React from 'react';
import { withNamespaces } from 'react-i18next';
import '../homePage/styles/LandingBlock.css';

import arrowImage from './images/arrowDown.png';

const LandingBlock = ({ t }) => (
  <div className="landing-block">
    <div className="centralTitle">
      <h1 className='landing-title'>{t("bel-photographers")}</h1>
      <p className='landing-underTitle'>{t("lib")}</p>
    </div>
    <div className="MoreButton">
      <p className="MoreButton-text">{t("landing-more")}</p>
      <img className="MoreButton-img" src={arrowImage} alt="moreButton"/>
    </div>
  </div>
);

export default withNamespaces()(LandingBlock);