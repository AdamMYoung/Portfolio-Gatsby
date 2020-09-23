import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Container>
        <Nav>
          <LinkContainer exact to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to='#skills'>
            <Nav.Link>Skills</Nav.Link>
          </LinkContainer>

          <LinkContainer to='#contact'>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/projects'>
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>

          <Nav.Link href='https://blog.aydev.uk' rel='noopener'>
            Blog
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
