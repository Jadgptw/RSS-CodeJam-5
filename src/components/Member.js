import React, { Fragment } from "react";

import _ from "lodash";

import photographs from "../photographs/photographs.json";
import "../views/memberPage/styles/index.css";

import Background from '../views/homePage/Background'
import Navigation from './Navigation';
import TimeLine from "./MemberPage/TimeLine";
import Video from "./MemberPage/Video";
import Map from "./MemberPage/Map";
import PhotoGallery from "./MemberPage/PhotoGallery";

const Member = ({ match }) => {
  const { firstName, lastName } = match.params;

  const photograph = _.find(photographs, {
    lastName,
    firstName
  });
  const { photo, bibliography, works, participations } = photograph;
  return (
    <Fragment>
      <Background/>
      <div className="member-page-navigation">
        <Navigation/>
      </div>
      <section className="member-page container background-BlackLine">
        <h1>
          {firstName} {lastName}
        </h1>
        <img
          className="member-photo"
          src={photo}
          alt={lastName}
          width={250}
          height={300}
        />
        <section className="member-page-bibliography">
          <h2>Библиография</h2>
          <TimeLine bibliography={bibliography} />
        </section>

        <section className="member-page-work-location">
          <h2>Основное место работы</h2>
          <Map {...photograph} />
        </section>

        <section className="member-page-video">
          <h2>Видео</h2>
          <Video {...photograph} />
        </section>
        <section className="member-page-photo">
          <h2>Фотогалерея</h2>
          <PhotoGallery photos={works} />
        </section>

        <section className="member-page-works">
          <h2>Список произведений</h2>
          <ul className="member-page-works-list">
            {participations.map(({ date, action }) => (
              <li key={`${action}`} className="worksListItem">
                <span>{date}</span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Fragment>
  );
};

export default Member;
