import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const NavButton = props => {
  const _onClick = () => document.getElementById(props.targetId).scrollIntoView();

  return (
    <Button variant="primary" onClick={_onClick}>
      {props.children}
    </Button>
  );
};

export default NavButton;

NavButton.propTypes = {
  //ID of the element to bring into view.
  targetId: PropTypes.string
};
