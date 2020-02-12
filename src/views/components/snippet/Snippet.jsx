import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

const Snippet = props => (
  <>
    <hr style={{ backgroundColor: "white" }} />
    <Container>
      <Row>
        <Col>
          <h4>{props.title}</h4>
        </Col>
      </Row>

      {props.children}
    </Container>
  </>
);

export default Snippet;

Snippet.propTypes = {
  //Title of the snippet.
  title: PropTypes.string
};
