import React from 'react';

import i18n from '../../components/translator';
import '../homePage/styles/LanguagePanel.css'

const LanguagePanel = () => {
	const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
    
  return (
    <ul className="LanguagePanel">
      <li onClick={() => changeLanguage('en')} className="LanguagePanelItem">EN</li>
      <li onClick={() => changeLanguage('by')} className="LanguagePanelItem">BY</li>
      <li onClick={() => changeLanguage('ru')} className="LanguagePanelItem">RU</li>
    </ul>
  )
};

export default LanguagePanel;