import React from 'react';
import { Link } from 'react-router-dom';

import siteLogo from '../views/homePage/images/siteLogo.png';

import LanguagePanel from '../views/homePage/LanguagePanel';

const Navigation = () => (
  <header>
    <div className="header-inside">
      <img className="site-icon" src={siteLogo} alt="логотип"/>
      <div className="headMenu">
        <Link className="menu-item" to="/">Home</Link>
        <Link className="menu-item search-button" to="search">Search</Link>
        <LanguagePanel/>
      </div>
    </div>
  </header>
);

export default Navigation;