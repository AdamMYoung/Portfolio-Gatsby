import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';

const Contact = () => {
  return (
    <DetailCard title='Contact' description="Pop your details below, and I'll get back to you as soon as possible.">
      <Col xs={12}>
        <Form name='contact' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <Form.Group controlId='name'>
            <Form.Label>Your Name</Form.Label>
            <Form.Control type='text' placeholder='Name' name='name' />
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Your Email</Form.Label>
            <Form.Control type='email' placeholder='Email address' name='email' />
          </Form.Group>

          <Form.Group controlId='message'>
            <Form.Control as='textarea' type='text' name='message' placeholder='Your message' />
          </Form.Group>

          <Button type='submit'>Send</Button>
        </Form>
      </Col>
    </DetailCard>
  );
};

export default Contact;
