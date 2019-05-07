import React, { Component } from "react";

export enum Sides {
  Left,
  Right
}

interface IProps {
  side?: Sides;
}

export default class TimelineEntry extends Component<IProps> {
  render() {
    const { side } = this.props;

    const selectedSide =
      side === Sides.Right ? "timeline-right" : "timeline-left";

    return (
      <div className={"timeline-container " + selectedSide}>
        <div className="timeline-content">{this.props.children}</div>
      </div>
    );
  }
}
