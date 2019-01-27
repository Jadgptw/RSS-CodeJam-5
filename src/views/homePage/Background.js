import React from 'react';
import '../homePage/styles/background.css';
import backgroundImage from './homeImages/homePageBG.jpg';

function Background(){
    return (
        <div className="background-Wrapper">
            <div className="background-BlackLine"></div>
            <img className="background-Image" src={backgroundImage}></img>
        </div>
    )
}

export default Background;