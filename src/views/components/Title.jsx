import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  return (
    <div style={{ paddingTop: "30vh", height: "100vh" }}>
      <h1>
        <strong>{props.title}</strong>
      </h1>

      <br />
      {props.children}
    </div>
  );
};

export default Title;

Title.propTypes = {
  //Title to display
  title: PropTypes.string
};
