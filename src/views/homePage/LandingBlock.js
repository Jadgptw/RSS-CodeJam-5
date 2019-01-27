import React from 'react';
import '../homePage/styles/LandingBlock.css'
import arrowImage from './homeImages/arrowDown.png';

function LandingBlock(props){
    const title = props.title;
    const underTitle = props.underTitle;
    return (
        <div className="landing-block">
            <div className="centralTitle">
                <h1 className='landing-title'>Belarusian Photographers</h1>
                <p className='landing-underTitle'>library</p>
            </div>
            <div className="MoreButton">
                <p className="MoreButton-text">More</p>
                <img className="MoreButton-img" src={arrowImage}/>
            </div>
        </div>
        
    )
}

export default LandingBlock;