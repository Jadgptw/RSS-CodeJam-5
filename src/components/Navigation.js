import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import siteLogo from '../views/homePage/images/siteLogo.png';

import LanguagePanel from '../views/homePage/LanguagePanel';

const Navigation = ({ t }) => (
  <header>
    <div className="header-inside">
      <img className="site-icon" src={siteLogo} alt="логотип"/>
      <div className="headMenu">
        <Link className="menu-item" to="/">{t('main')}</Link>
        <Link className="menu-item search-button" to="search">{t('search')}</Link>
        <LanguagePanel/>
      </div>
    </div>
  </header>
);

export default withNamespaces()(Navigation);