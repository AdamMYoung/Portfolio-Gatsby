import React from "react";
import PropTypes from "prop-types";
import NavButton from "./NavButton";

const NavButtonWrapper = props => {
  return (
    <div style={{ position: "relative" }} id={props.id}>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        {/* Previous */}
        {props.previousId && props.previousText && (
          <NavButton targetId={props.previousId}>Previous: {props.previousText}</NavButton>
        )}
        {/* Next */}
        {props.nextId && props.nextText && <NavButton targetId={props.nextId}>Next: {props.nextText}</NavButton>}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default NavButtonWrapper;

NavButtonWrapper.propTypes = {
  id: PropTypes.string,

  nextId: PropTypes.string,

  nextText: PropTypes.string,

  previousId: PropTypes.string,

  previousText: PropTypes.string
};
