import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const Navigation = () => {
  return (
    <Navbar expand='lg' bg='transparent' fixed='top'>
      <Container>
        <Navbar.Brand>Adam Young</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link>Skills</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Experience</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
