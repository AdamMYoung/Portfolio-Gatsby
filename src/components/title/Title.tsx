import React, { Component } from "react";
import { Col, Image, Container, Row } from "react-bootstrap";
import profile from "../../media/profile.jpg";
import "./Title.css";

export default class Title extends Component {
  render() {
    return (
      <Container fluid>
        <Row noGutters>
          <Col className="body">
            <Image src={profile} height={150} width={150} roundedCircle />
            <div className="title">
              <h2>Adam Young</h2>
              <h4>Full-Stack Software Developer</h4>
              <p className="Title-description">
                I'm a 21 year old software developer based in Middlesbrough, UK.
                I focus on all aspects of software development, ranging from
                back-end to front-end and everything in-between. I primarily
                specialize in React and API development, and enjoy experimenting
                with Android on the side.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
