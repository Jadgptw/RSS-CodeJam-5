import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

class TimeLine extends Component {
  render() {
    const { bibliography } = this.props;

    return (
      <Timeline lineColor={"#ddd"}>
        {bibliography.map(({ date, action }) => (
          <TimelineItem
            key={`${action}`}
            dateText={date}
            style={{ color: "#e86971" }}
          >
            <span className="member-page-timeline-action">{action}</span>
          </TimelineItem>
        ))}
      </Timeline>
    );
  }
}
export default TimeLine;
