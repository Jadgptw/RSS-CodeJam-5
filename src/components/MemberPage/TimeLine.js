import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { withNamespaces } from 'react-i18next';

class TimeLine extends Component {
  render() {
    const { bibliography, t } = this.props;

    return (
      <Timeline lineColor={"#ddd"}>
        {bibliography.map(({ date, action }) => (
          <TimelineItem
            key={t(action)}
            dateText={t(date)}
            style={{ color: "#e86971" }}
          >
            <span className="member-page-timeline-action">{t(action)}</span>
          </TimelineItem>
        ))}
      </Timeline>
    );
  }
}
export default withNamespaces()(TimeLine);
