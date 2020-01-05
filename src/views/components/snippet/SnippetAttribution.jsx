import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

export const SnippetAttribution = props => (
  <Row>
    <Col>
      {props.link ? (
        <a href={props.link}>
          <h5>Attributed to: {props.children}</h5>
        </a>
      ) : (
        <h5>Attributed to: {props.children}</h5>
      )}
    </Col>
  </Row>
);

SnippetAttribution.propTypes = {
  //Link to the code snippet source if available.
  link: PropTypes.string
};
