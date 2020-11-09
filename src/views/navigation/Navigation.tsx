import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const NavLink = styled(Nav.Link)`
  color: white !important;
  font-weight: bold;
`;

export const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='transparent' variant='dark' fixed='top'>
      <Container>
        <Navbar.Brand>Adam Young</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ml-auto'>
            <NavLink>Skills</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Experience</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Blog</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
