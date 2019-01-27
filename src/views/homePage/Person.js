import React from 'react';
import '../homePage/styles/Person.css'


function Person(props){
    return (
        <div className="person-block">
            <div className="person-avatar">
                <img className="person-avatar-img" src={props.img}/>
            </div>
            <div className="person-name">{props.name}</div>
            <div className="person-duties">{props.duty}</div>
            <a href={"https://github.com/" + props.gitName} className="person-gitHub-ref">
                <img className="person-gitHub-img" src={props.git}/>
            </a>
            
        </div>
    )
}

export default Person;