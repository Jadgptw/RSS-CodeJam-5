import React from 'react';
import '../homePage/styles/header.css'
import LanguagePanel from './LanguagePanel';
import siteLogo from './homeImages/siteLogo.png';

function Header(props){
    return (
        <header>
            <div className="headerInside">
                <div className="iconWrapper">
                    <img src={siteLogo}/>
                </div>
                <div className="headMenu">
                    <a className="menu-item">Search</a>
                    <a className="menu-item">about</a>
                    <a className="menu-item">Main</a>
                    <LanguagePanel/>
                </div>
            </div>
        </header>
    )
}

export default Header;