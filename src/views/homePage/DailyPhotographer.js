import React from 'react';
import '../homePage/styles/DailyPhotographer.css'
import avatarOfAuthor from './homeImages/Jan_Bulhak.jpg';


function DailyPhotographer(props){
    //const authorName;
    return (
        <div className="dailyPhotographer-block">
            <h2 className="daily-Photographer-title">Photographer of the day</h2>
            <div className="dailyPhotographer-wrapper">
                <div className="authorAvatar">
                    <div className="author-name">Jan Bułhak</div>
                    <div className="author-photo-wrap">
                        <img className="author-photo" src={avatarOfAuthor}/>
                    </div>
                </div>
                <div className="author-information">
                    <p className="author-life-duration">
                        1876–1950
                    </p>
                    <p className="about-author">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <div className="show-more-about-author">
                        more
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyPhotographer;