import Axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

import { DetailCard } from '../views/card/DetailCard';

const Contact = () => {
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    await Axios.post(
      '/',
      { 'form-name': 'contact', name, email: emailAddress, message },
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <DetailCard title='Contact' description="Pop your details below, and I'll get back to you as soon as possible.">
      <Col xs={12}>
        <Form name='contact' onSubmit={handleSubmit}>
          <input type='hidden' name='form-name' value='contact' />
          <Form.Group controlId='name'>
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Email address'
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='message'>
            <Form.Control
              as='textarea'
              type='text'
              placeholder='Your message'
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Form.Group>

          <Button disabled={submitted} type='submit'>
            Send
          </Button>
        </Form>
      </Col>
    </DetailCard>
  );
};

export default Contact;
