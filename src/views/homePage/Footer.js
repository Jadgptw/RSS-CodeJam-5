import React from 'react';
import { withNamespaces } from 'react-i18next';
import '../homePage/styles/Footer.css';

import gitIcoDark from './images/gutHubIcoDark.png';

const Footer = ({ t }) => (
  <footer className="home-footer">
    <a href="https://github.com/Jadgptw/RSS-CodeJam-5" className="source-code-ref">
      <img className="source-code-ref-img" src={gitIcoDark} alt="github"/>
      {t("source-code")}
    </a>
  </footer>
);
export default withNamespaces()(Footer);