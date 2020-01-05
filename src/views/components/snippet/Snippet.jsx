import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import { SnippetCode } from "./SnippetCode";
import { SnippetInfo } from "./SnippetInfo";

import { SnippetAttribution } from "./SnippetAttribution";

const Snippet = props => (
  <>
    <Container>
      <Row>
        <Col>
          <h4>{props.title}</h4>
        </Col>
      </Row>

      {props.children}
    </Container>
    <hr style={{ backgroundColor: "white" }} />
  </>
);

Snippet.Info = SnippetInfo;
Snippet.Code = SnippetCode;
Snippet.Attribution = SnippetAttribution;

export default Snippet;

Snippet.propTypes = {
  //Title of the snippet.
  title: PropTypes.string
};
