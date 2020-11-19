import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export const ContactForm = () => {
  return (
    <Col>
      <Form name='contact' method='post'>
        <input type='hidden' name='form-name' value='contact' />
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='John Doe' name='name' />
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='john.doe@contact.co.uk' name='email' />
        </Form.Group>

        <Form.Group controlId='message'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' type='text' name='message' placeholder='Hi, I was wondering...' />
        </Form.Group>

        <Button type='submit'>Send</Button>
      </Form>
    </Col>
  );
};
