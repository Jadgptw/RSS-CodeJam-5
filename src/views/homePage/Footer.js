import React from 'react';
import '../homePage/styles/Footer.css';

import gitIcoDark from './images/gutHubIcoDark.png';

const Footer = () => (
  <footer className="home-footer">
    <a href="https://github.com/Jadgptw/RSS-CodeJam-5" className="source-code-ref">
      <img className="source-code-ref-img" src={gitIcoDark} alt="github"/>
      исходный код
    </a>
  </footer>
);
export default Footer;