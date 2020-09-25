import React from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import mobile from 'is-mobile';

type Props = {
  title: string;
  description: string;
  previousUrl?: string;
  nextUrl?: string;
};

const NavButton = styled(Button)`
  margin: auto 8px;
  padding: 0px;
  height: 100%;
  color: ${(props) => (props.disabled ? 'white' : 'lightgray')} !important;

  svg {
    height: 100%;
  }
`;

export const DetailCard: React.FC<Props> = (props) => {
  const { title, description, previousUrl, nextUrl, children } = props;
  const isMobile = mobile();

  return (
    <div className='d-flex h-100'>
      {!isMobile && (
        <LinkContainer to={previousUrl ?? ''}>
          <NavButton variant='link' disabled={!previousUrl} onMouseDown={(e: any) => e.preventDefault()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </NavButton>
        </LinkContainer>
      )}

      <Container fluid>
        <Row>
          <Col xs={12}>
            <h2>{title}</h2>
            <p>{description}</p>
          </Col>
        </Row>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>

      {!isMobile && (
        <LinkContainer to={nextUrl ?? ''}>
          <NavButton variant='link' disabled={!nextUrl} onMouseDown={(e: any) => e.preventDefault()}>
            <FontAwesomeIcon icon={faArrowRight} />
          </NavButton>
        </LinkContainer>
      )}
    </div>
  );
};
