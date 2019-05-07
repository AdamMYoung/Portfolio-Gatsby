import React, { Component } from "react";
import "./Timeline.css";

export default class Timeline extends Component {
  render() {
    return <div className="timeline">{this.props.children}</div>;
  }
}
