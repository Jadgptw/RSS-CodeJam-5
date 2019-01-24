import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="main-navigation">
    <Link to="/">Home Page </Link>
    <Link to="search"> Search Page </Link>
  </nav>
);

export default Navigation;