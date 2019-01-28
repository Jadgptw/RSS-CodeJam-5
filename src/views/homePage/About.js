import React from 'react';
import { withNamespaces } from 'react-i18next';

import '../homePage/styles/About.css';

function About({ t }){
  return (
    <div className="about-block">
      <div className="about-block-wrapper">
        <h2 className="section-title">{t("О проекте")}</h2>
        <p className="about-text">{t("about-text")}</p>
        <p className="about-after-text">{t("about-after-text")}</p>
      </div>
    </div>
  )
}

export default withNamespaces()(About);