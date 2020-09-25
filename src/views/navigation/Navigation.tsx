import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const NavButton = styled(Button)`
  padding: 0;
  margin: 4px 0px;
  width: 100%;
  background: white;
  padding: 12px;
  border-radius: 16px;
  color: black !important;

  &:focus,
  &:active {
    border-color: transparent;
  }
`;

export const Navigation = () => {
  return (
    <>
      <Col xs={6} sm={2} className='mt-3 mt-sm-1'>
        <LinkContainer to='/' exact>
          <NavButton variant='link'>Home</NavButton>
        </LinkContainer>
      </Col>
      <Col xs={6} sm={2} className='mt-3 mt-sm-1'>
        <LinkContainer to='/skills'>
          <NavButton variant='link'>Skills</NavButton>
        </LinkContainer>
      </Col>
      <Col xs={6} sm={2} className='mt-1 mt-sm-1'>
        <LinkContainer to='/projects'>
          <NavButton variant='link'>Projects</NavButton>
        </LinkContainer>
      </Col>
      <Col xs={6} sm={2} className='mt-1 mt-sm-1'>
        <NavButton variant='link' href='https://blog.aydev.uk' target='_blank'>
          Blog
        </NavButton>
      </Col>
      <Col xs={12} sm={2} className='mt-1 mt-sm-1'>
        <LinkContainer to='/contact'>
          <NavButton variant='link'>Contact</NavButton>
        </LinkContainer>
      </Col>
    </>
  );
};
