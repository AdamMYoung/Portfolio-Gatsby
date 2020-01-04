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
      </Container>
    </div>
  );
};

export default Contact;
