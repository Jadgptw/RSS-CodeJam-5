import React from "react";
import TimeLine from "./MemberPage/TimeLine";
import Video from "./MemberPage/Video";
import Map from "./MemberPage/Map";
import "../views/memberPage/styles/index.css";
import _ from "lodash";
import photographs from "../photographs/photographs.json";
import PhotoGallery from "./MemberPage/PhotoGallery";
import "./member.css";

const Member = ({ match }) => {
  const { firstName, lastName } = match.params;

  const photograph = _.find(photographs, {
    lastName,
    firstName
  });
  const { photo, bibliography, works } = photograph;
  return (
    <section className="member-page">
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
      <PhotoGallery photos={works} />
      <section>
        <h2>список произведений</h2>
        <ul>
          {participations.map(({ date, action }) => (
            <li key={`${action}`} className="worksListItem">
              <span>{date}</span>
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Member;
