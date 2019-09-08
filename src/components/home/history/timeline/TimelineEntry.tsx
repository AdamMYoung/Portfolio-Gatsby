import React from "react";

export enum Sides {
  Left,
  Right
}

interface IProps {
  side?: Sides;
}

const TimelineEntry: React.FC<IProps> = props => {
  const selectedSide = props.side === Sides.Right ? "timeline-right" : "timeline-left";

  return (
    <div className={"timeline-container " + selectedSide}>
      <div className="timeline-content">{props.children}</div>
    </div>
  );
};

export default TimelineEntry;
