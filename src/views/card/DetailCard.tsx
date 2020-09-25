import React, { useEffect, useState } from 'react';
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

const FadingDiv = styled.div<{ fadeIn: boolean }>`
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.5s;
`;

export const DetailCard: React.FC<Props> = (props) => {
  const [isVisible, setVisible] = useState(false);
  const { title, description, previousUrl, nextUrl, children } = props;
  const isMobile = mobile();

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

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
            <FadingDiv fadeIn={isVisible}>
              <h2>{title}</h2>
              <p>{description}</p>
            </FadingDiv>
          </Col>
        </Row>
        <Row>
          <Col>
            <FadingDiv fadeIn={isVisible}>{children}</FadingDiv>
          </Col>
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
