import React from 'react';
import '../homePage/styles/Footer.css';



function Footer(props){
    const sourceCodeRef = props.sourceCodeRef;
    return (
        <footer className="home-footer">
            <a href={"https://github.com/" + sourceCodeRef} className="source-code-ref">
                <img className="source-code-ref-img" src={props.img}/>
                source code
            </a>
        </footer>
    )
}

export default Footer;