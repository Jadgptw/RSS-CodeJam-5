import React, { Component } from "react";
import TimeLine from "./MemberPage/TimeLine";
//import Video from "./MemberPage/Video";
//import Map from "./MemberPage/Map";
import _ from "lodash";
import photographs from "../photographs/photographs.json";

class Member extends Component {
  render() {
    const match = {
      params: {
        firstName: "Михаил",
        lastName: "Борозна"
      }
    };

    const lastName = match.params.lastName;
    const firstName = match.params.firstName;

    const photograph = _.find(photographs, {
      lastName: lastName,
      firstName: firstName
    });
    const { photo, bibliography } = photograph;
    return (
      <section className="member-page">
        <h1>
          {firstName} {lastName}
        </h1>
        <img src={photo} alt={lastName} />
        <TimeLine bibliography={bibliography} />
        {/* <Video /> */}
        {/* <Map /> */}
      </section>
    );
  }
}

export default Member;
