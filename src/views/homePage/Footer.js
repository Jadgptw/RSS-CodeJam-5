import React from 'react';
import '../homePage/styles/Footer.css';
import gitIcoDark from './homeImages/gutHubIcoDark.png';


function Footer(){
    return (
        <footer className="home-footer">
            <a href={"https://github.com/Jadgptw/RSS-CodeJam-5"} className="source-code-ref">
                <img className="source-code-ref-img" src={gitIcoDark}/>
                source code
            </a>
        </footer>
    )
}

export default Footer;