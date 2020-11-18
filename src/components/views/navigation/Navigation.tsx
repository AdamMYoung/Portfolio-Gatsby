import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import useScrollPosition from '@react-hook/window-scroll';
import { graphql, Link, useStaticQuery } from 'gatsby';

const NavLink = styled(Nav.Link)<{ hasBackground?: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.hasBackground ? 'black' : 'white')} !important;
  transition: color 0.5s;
`;

const ReachLink = styled(Link)<{ hasBackground?: boolean }>`
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
  position: fixed;
  background-color: ${(props) => (props.hasBackground ? 'white' : 'transparent')} !important;
  color: ${(props) => (props.hasBackground ? 'black' : 'white')} !important;
  border-bottom: ${(props) => (props.hasBackground ? '1px solid gray' : 'none')};
  transition: background-color 0.5s, border-bottom 0.5s;
`;

export const Navigation = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPage {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `);

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
        <ReachLink to='/'>
          <NavbarBrand hasBackground={hasBackground} className='font-weight-bold'>
            Adam Young
          </NavbarBrand>
        </ReachLink>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav className='ml-auto'>
            {data.allContentfulPage.edges.map(({ node }) => (
              <ReachLink to={node.slug} hasBackground={hasBackground}>
                {node.name}
              </ReachLink>
            ))}

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
