import React from 'react';
import { withNamespaces } from 'react-i18next';

import _ from 'lodash';

import '../homePage/styles/Team.css';

import Person from './Person';

import avatar1 from './images/ava1.jpg';
import avatar2 from './images/ava2.jpg';
import avatar3 from './images/ava3.jpg';
import avatar4 from './images/ava4.jpg';
import avatar5 from './images/ava5.jpg';

const contributors = [
  {
    name: "Nikita Pavlovich",
    img: avatar1,
    gitName: "magi-a",
    duty: "web-design",
  },
  {
    name: "Aliaksandr Hordzin",
    img: avatar2,
    gitName: "jadgptw",
    duty: "Team-lead",
  },
  {
    name: "Andrey Vintskevich",
    img: avatar3,
    gitName: "andvikvin",
    duty: "Front-End",
  },
  {
    name: "Katsiaryna Paulovich",
    img: avatar4,
    gitName: "katepavlovich",
    duty: "Front-End",
  },
  {
    name: "Aliaksandra Rybak",
    img: avatar5,
    gitName: "aliaksandrarybak",
    duty: "Front-End",
  }
];

const Team = ({ t }) => (
  <div className="team-block">
    <h2 className="section-title">{t("our-team")}</h2>
    <div className="team-wrapper">
      { _.map(contributors, contributor => <Person {...contributor}/>) }
    </div>
  </div>
);

export default withNamespaces()(Team);