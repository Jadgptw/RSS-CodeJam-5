import React from 'react';
import '../homePage/styles/Person.css'

import gitIcoYellow from './images/gutHubIco.png';

const Person =({ name, img, gitName, duty }) => (
  <div className="person-block">
    <div className="person-avatar">
      <img className="person-avatar-img" src={img} alt="avatar"/>
    </div>
    <div className="person-name">{name}</div>
    <div className="person-duties">{duty}</div>
    <a href={`https://github.com/${gitName}`} className="person-gitHub-ref">
      <img className="person-gitHub-img" src={gitIcoYellow} alt="avatarImage"/>
    </a>
  </div>
);

export default Person;