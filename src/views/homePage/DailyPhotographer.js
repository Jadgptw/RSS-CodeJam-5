import React from 'react';
import { Link } from 'react-router-dom';

import '../homePage/styles/DailyPhotographer.css'

const DailyPhotographer = ({ firstName, lastName, photo }) => (
    <div className="dailyPhotographer-block">
        <h2 className="section-title">Фотограф дня</h2>
        <div className="dailyPhotographer-wrapper">
            <div className="authorAvatar">
                <div className="author-name">{firstName} {lastName}</div>
                <div className="author-photo-wrap">
                    <img className="author-photo" src={photo} alt="photograph"/>
                </div>
            </div>
            <div className="author-information">
                <p className="about-author">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <Link className="show-more-about-author" to={`member/${lastName}/${firstName}`}>больше</Link>
            </div>
        </div>
    </div>
);

export default DailyPhotographer;