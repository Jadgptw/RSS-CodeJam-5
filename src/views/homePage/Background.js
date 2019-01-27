import React from 'react';
import '../homePage/styles/background.css';

function Background(props){
    const background = props.background;
    return (
        <div className="background-Wrapper">
            <div className="background-BlackLine"></div>
            <img className="background-Image" src={background}></img>
        </div>
    )
}

export default Background;