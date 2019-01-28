import React, { Fragment } from "react";
import { withNamespaces } from 'react-i18next';

import _ from "lodash";

import photographs from "../photographs/photographs.json";
import "../views/memberPage/styles/index.css";

import Background from '../views/homePage/Background'
import Navigation from './Navigation';
import TimeLine from "./MemberPage/TimeLine";
import Video from "./MemberPage/Video";
import Map from "./MemberPage/Map";
import PhotoGallery from "./MemberPage/PhotoGallery";

const Member = ({ match, t }) => {
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
          {t(firstName)} {t(lastName)}
        </h1>
        <img
          className="member-photo"
          src={photo}
          alt={t(lastName)}
          width={250}
          height={300}
        />
        <section className="member-page-bibliography">
          <h2>{t("bibliography")}</h2>
          <TimeLine bibliography={bibliography} />
        </section>

        <section className="member-page-work-location">
          <h2>{t("Основное место работы")}</h2>
          <Map {...photograph} />
        </section>

        <section className="member-page-video">
          <h2>{t("Видео")}</h2>
          <Video {...photograph} />
        </section>
        <section className="member-page-photo">
          <h2>{t("Фотогалерея")}</h2>
          <PhotoGallery photos={works} />
        </section>

        <section className="member-page-works">
          <h2>{t("Список произведений")}</h2>
          <ul className="member-page-works-list">
            {participations.map(({ date, action }) => (
              <li key={`${action}`} className="worksListItem">
                <span>{t(date)}</span>
                <span>{t(action)}</span>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Fragment>
  );
};

export default withNamespaces()(Member);
