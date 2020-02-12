import React from "react";
import { Row, Col } from "react-bootstrap";

export const SnippetInfo = props => (
  <Row>
    <Col>{props.children}</Col>
  </Row>
);
