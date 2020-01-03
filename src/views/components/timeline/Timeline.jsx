import React from "react";
import PropTypes from "prop-types";

import "./Timeline.css";

const TimelineEntry = props => {
  const selectedSide = props.side === "right" ? "timeline-right" : "timeline-left";

  return (
    <div className={"timeline-container " + selectedSide}>
      <div className="timeline-content">{props.children}</div>
    </div>
  );
};

const Timeline = props => <div className="timeline">{props.children}</div>;

Timeline.Entry = TimelineEntry;

export default Timeline;

TimelineEntry.propTypes = {
  side: PropTypes.oneOf(["left", "right"])
};
