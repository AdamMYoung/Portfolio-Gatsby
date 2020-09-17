import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = props => {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <Button variant="outline-light" onClick={props.onScroll}>
            Back to the top
          </Button>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", marginTop: 24 }} className="justify-content-center list-elements">
          <a href="https://twitter.com/AdamMYoung_" title="Twitter">
            <i className="fab fa-twitter-square fa-3x" />
          </a>
          <a href="https://www.linkedin.com/in/adammichaelyoung/" title="LinkedIn">
            <i className="fab fa-linkedin fa-3x" />
          </a>
          <a href="https://github.com/ADAMMYOUNG" title="Github">
            <i className="fab fa-github-square fa-3x" />
          </a>
          <a href="mailto:adamyoungg97@gmail.com" title="Email">
            <i className="fas fa-envelope-square fa-3x" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <p>
              Website by Adam Young. Created with <a href="https://reactjs.org/">React</a>
            </p>
            <p>
              Find the source code <a href="https://github.com/AdamMYoung/Portfolio">here</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

Footer.propTypes = {
  onScroll: PropTypes.func
};
