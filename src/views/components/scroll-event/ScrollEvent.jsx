import React from "react";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";

const ScrollEvent = props => (
  <VisibilitySensor partialVisibility onChange={visible => visible && props.onEnter()}>
    {props.children}
  </VisibilitySensor>
);

export default ScrollEvent;

ScrollEvent.defaultProps = {
  onEnter: () => {}
};

ScrollEvent.propTypes = {
  //Function called when the element enters the viewport.
  onEnter: PropTypes.func
};
