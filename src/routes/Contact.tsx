import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { DetailCard } from '../views/card/DetailCard';

const RoundedFormControl = styled(Form.Control)`
  border-radius: 16px;
`;

const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

const Contact = () => {
  return (
    <DetailCard
      previousUrl='/history'
      title='Contact'
      description="Pop your details below, and I'll get back to you as soon as possible."
    >
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Form name='contact' method='post'>
              <input type='hidden' name='form-name' value='contact' />
              <Form.Group controlId='name'>
                <Form.Label>Your Name</Form.Label>
                <RoundedFormControl type='text' placeholder='Name' name='name' />
              </Form.Group>

              <Form.Group controlId='email'>
                <Form.Label>Your Email</Form.Label>
                <RoundedFormControl type='email' placeholder='Email address' name='email' />
              </Form.Group>

              <Form.Group controlId='message'>
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as='textarea'
                  type='text'
                  name='message'
                  placeholder='Your message'
                  style={{ borderRadius: 16 }}
                />
              </Form.Group>

              <RoundedButton type='submit'>Send</RoundedButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </DetailCard>
  );
};

export default Contact;
