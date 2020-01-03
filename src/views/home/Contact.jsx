import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./Contact.css";

const Contact = () => {
  const [subject, setSubject] = useState(null);
  const [body, setBody] = useState(null);

  return (
    <div>
      <Container>
        <Row>
          <Col style={{ marginBottom: 36 }}>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                onChange={e => setSubject(e.target.value)}
                style={{ background: "transparent", color: "white" }}
                placeholder="Enter subject"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Body</Form.Label>
              <Form.Control
                onChange={e => setBody(e.target.value)}
                style={{ background: "transparent", color: "white" }}
                as="textarea"
                placeholder="Enter message"
              />
            </Form.Group>

            <Button
              variant="outline-light"
              onClick={() => (window.location = `mailto:adamyoungg97@gmail.com?subject=${subject}&body=${body}`)}
            >
              Submit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }} className="justify-content-center list-elements">
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
    </div>
  );
};

export default Contact;
