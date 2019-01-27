import React from 'react';
import '../homePage/styles/LandingBlock.css'

function LandingBlock(props){
    const title = props.title;
    const underTitle = props.underTitle;
    const arrowImage = props.arrowImage;
    return (
        <div className="landing-block">
            <div className="centralTitle">
                <h1 className='landing-title'>{title}</h1>
                <p className='landing-underTitle'>{underTitle}</p>
            </div>
            <div className="MoreButton">
                <p className="MoreButton-text">More</p>
                <img className="MoreButton-img" src={arrowImage}/>
            </div>
        </div>
        
    )
}

export default LandingBlock;