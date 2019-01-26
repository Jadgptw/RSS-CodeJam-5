import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

class TimeLine extends Component {
  render() {
    const { bibliography } = this.props;

    return (
      <Timeline lineColor={"#ddd"}>
        {bibliography.map(({ firstName, lastName, date, action }) => (
          <TimelineItem
            key={`${firstName}_${lastName}`}
            dateText={date}
            style={{ color: "#e86971" }}
          >
            <span>{action}</span>
          </TimelineItem>
        ))}
      </Timeline>
    );
  }
}
export default TimeLine;
