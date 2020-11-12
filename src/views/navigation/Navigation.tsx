import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import useScrollPosition from '@react-hook/window-scroll';
import { LinkContainer } from 'react-router-bootstrap';
import { HashLink as RRHashLink } from 'react-router-hash-link';

const NavLink = styled(Nav.Link)<{ hasBackground?: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.hasBackground ? 'black' : 'white')} !important;
  transition: color 0.5s;
`;

const HashLink = styled(RRHashLink)<{ hasBackground?: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.hasBackground ? 'black' : 'white')} !important;
  transition: color 0.5s;
  display: block;
  padding: 0.5rem 0.5rem;

  &:hover {
    text-decoration: none;
  }
`;

const NavbarBrand = styled(Navbar.Brand)<{ hasBackground?: boolean }>`
  color: ${(props) => (props.hasBackground ? 'black' : 'white')} !important;
  transition: color 0.5s;
`;

const NavDivider = styled.div<{ hasBackground?: boolean }>`
  height: 1.75rem;
  margin: 5px 4px;
  border-right: 1px solid ${(props) => (props.hasBackground ? 'black' : 'white')};
  border-left: 1px solid ${(props) => (props.hasBackground ? 'black' : 'white')};
  transition: border-left 0.5s, border-right 0.5s;
`;

const StyledNavbar = styled(Navbar)<{ hasBackground?: boolean }>`
  background-color: ${(props) => (props.hasBackground ? 'white' : 'transparent')} !important;
  color: ${(props) => (props.hasBackground ? 'black' : 'white')} !important;
  border-bottom: ${(props) => (props.hasBackground ? '1px solid gray' : 'none')};
  transition: background-color 0.5s, border-bottom 0.5s;
`;

export const Navigation = () => {
  const scrollY = useScrollPosition();
  const hasBackground = scrollY !== 0;

  return (
    <StyledNavbar
      hasBackground={hasBackground}
      collapseOnSelect
      expand='lg'
      bg={hasBackground ? 'light' : 'dark'}
      variant={hasBackground ? 'light' : 'dark'}
      fixed='top'
    >
      <Container>
        <HashLink to='/#home'>
          <NavbarBrand hasBackground={hasBackground} className='font-weight-bold'>
            Adam Young
          </NavbarBrand>
        </HashLink>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ml-auto'>
            <HashLink to='/#skills' hasBackground={hasBackground}>
              Skills
            </HashLink>
            <HashLink to='/#experience' hasBackground={hasBackground}>
              Experience
            </HashLink>
            <HashLink to='/#contact' hasBackground={hasBackground}>
              Contact
            </HashLink>

            <LinkContainer to='/photography'>
              <NavLink hasBackground={hasBackground}>Photography</NavLink>
            </LinkContainer>
            <NavDivider className='d-none d-lg-block' hasBackground={hasBackground} />

            <NavLink href='https://blog.aydev.uk/' target='_blank' rel='noopener' hasBackground={hasBackground}>
              Blog
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};
