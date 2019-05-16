import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ paddingTop: 36 }}>
          <Col xs={12} md={4}>
            <h1>About Me</h1>
          </Col>
          <Col xs={12} md={8}>
            <h5>
              I'm Adam Young, a Full-Stack Software Developer who specializes in
              React and .NET Core development. A link to my CV can be found
              <a href="https://onedrive.live.com/embed?cid=CFB23384E8E2C11A&resid=CFB23384E8E2C11A%2123708&authkey=AFG2xl_rZCPK3rM&em=2">
                {" here"}
              </a>
              .
            </h5>
          </Col>
        </Row>
      </Container>
    );
  }
}
