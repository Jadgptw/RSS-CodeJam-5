import React from 'react';
import Header from '../views/homePage/header';
import Background from '../views/homePage/Background';
import '../views/homePage/styles/App.css';
import LandingBlock from '../views/homePage/LandingBlock';
import DailyPhotographer from '../views/homePage/DailyPhotographer';
import About from '../views/homePage/About';
import Team from '../views/homePage/Team';
import Footer from '../views/homePage/Footer';

const Home = () => (
  <div className="App">
    <Header/>
    <Background/>
    <LandingBlock/>
    <DailyPhotographer/>
    <About/>
    <Team/>
    <Footer/>
  </div>
);

export default Home;