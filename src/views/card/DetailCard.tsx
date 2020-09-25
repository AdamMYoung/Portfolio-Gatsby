import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

type Props = {
  title: string;
  description: string;
  previousUrl?: string;
  nextUrl?: string;
};

const NavButton = styled(Button)`
  margin: 0px 8px;
  padding: 0px;
  height: 100%;
  color: ${(props) => (props.disabled ? 'lightgray' : 'black')};

  svg {
    height: 100%;
  }
`;

export const DetailCard: React.FC<Props> = (props) => {
  const { title, description, previousUrl, nextUrl, children } = props;

  return (
    <div className='d-flex h-100'>
      <LinkContainer to={previousUrl ?? ''}>
        <NavButton variant='link' disabled={!previousUrl} onMouseDown={(e: any) => e.preventDefault()}>
          <FontAwesomeIcon icon={faBackward} />
        </NavButton>
      </LinkContainer>

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

      <LinkContainer to={nextUrl ?? ''}>
        <NavButton variant='link' disabled={!nextUrl} onMouseDown={(e: any) => e.preventDefault()}>
          <FontAwesomeIcon icon={faForward} />
        </NavButton>
      </LinkContainer>
    </div>
  );
};
