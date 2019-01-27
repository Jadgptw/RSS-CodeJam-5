import React from 'react';

import Background from '../views/homePage/Background';
import '../views/homePage/styles/App.css';
import '../views/homePage/styles/header.css';

import Navigation from './Navigation';
import LandingBlock from '../views/homePage/LandingBlock';
import DailyPhotographerCreator from './homePage/DailyPhotographerCreator';
import About from '../views/homePage/About';
import Team from '../views/homePage/Team';
import Footer from '../views/homePage/Footer';

const Home = () => (
  <div className="App">
    <Navigation/>
    <Background />
    <LandingBlock />
    <DailyPhotographerCreator />
    <About/>
    <Team />
    <Footer />
  </div>
);

export default Home;