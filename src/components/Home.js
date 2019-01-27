import React from 'react';
import Header from '../views/homePage/header';
import Background from '../views/homePage/Background';
import '../views/homePage/styles/App.css';
import siteLogo from '../../public/homeImages/siteLogo.png';
import backgroundImage from '../../public/homeImages/homePageBG.jpg';
import arrowImage from '../../public/homeImages/arrowDown.png';
import LandingBlock from '../views/homePage/LandingBlock';
import DailyPhotographer from '../views/homePage/DailyPhotographer';
import avatarOfAuthor from '../../public/homeImages/Jan_Bulhak.jpg';
import About from '../views/homePage/About';
import Team from '../views/homePage/Team';
import avatar1 from '../../public/homeImages/ava1.jpg';
import avatar2 from '../../public/homeImages/ava2.jpg';
import avatar3 from '../../public/homeImages/ava3.jpg';
import avatar4 from '../../public/homeImages/ava4.jpg';
import avatar5 from '../../public/homeImages/ava5.jpg';
import gitIcoYellow from '../../public/homeImages/gutHubIco.png';
import gitIcoDark from '../../public/homeImages/gutHubIcoDark.png';
import Footer from '../views/homePage/Footer';

const Home = () => (
  <div className="App">
    <Header logo={siteLogo}/>
    <Background background={backgroundImage}/>
    <LandingBlock title='Belarusian Photographers' underTitle='library' arrowImage={arrowImage}/>
    <DailyPhotographer avatarImg={avatarOfAuthor}/>
    <About/>
    <Team imgAva={[avatar1,avatar2,avatar3,avatar4,avatar5]} git={gitIcoYellow}/>
    <Footer sourceCodeRef="Jadgptw/RSS-CodeJam-5" img={gitIcoDark}/>
  </div>
);

export default Home;