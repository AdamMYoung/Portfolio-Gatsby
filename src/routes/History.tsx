import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { DetailCard } from '../views/card/DetailCard';
import { SkillCard } from '../views/card/SkillCard';

import laptop from '../assets/code-laptop.png';
import office from '../assets/office.jpg';
import university from '../assets/teesside-uni.jpg';
import quayside from '../assets/quayside.jpg';

const RoundedImage = styled(Image)`
  border-radius: 16px;
`;

const SkillDetailText = styled.p`
  margin-top: 8px !important;
  margin-bottom: 16px !important;
`;

const OverflowContainer = styled(Container)`
  height: 475px;
  overflow-x: auto;
  padding-top: 8px;
`;

const History = () => {
  return (
    <DetailCard previousUrl='/projects' nextUrl='/contact' title='History' description='My education and employment.'>
      <OverflowContainer fluid>
        <Row>
          <Col xs={12} className='mb-4'>
            <SkillCard disabled title='Terraquest Solutions (2019-Present)'>
              <Container fluid className='mt-3'>
                <Row>
                  <Col xs={12} md={6} className='d-flex align-items-center'>
                    <RoundedImage src={quayside} alt='White office block' fluid />
                  </Col>
                  <Col xs={12} md={6} className='d-flex align-items-center'>
                    <SkillDetailText>
                      My first graduate role is at Terraquest Solutions, where I work primarily as a front-end React
                      developer on a variety of internal and external applications.
                    </SkillDetailText>
                  </Col>
                </Row>
              </Container>
            </SkillCard>
          </Col>
          <Col xs={12} className='mb-4'>
            <SkillCard disabled title='Teesside University - Final Year (2018-2019)'>
              <Container fluid className='mt-3'>
                <Row>
                  <Col xs={12} md={6} className='d-flex align-items-center'>
                    <RoundedImage src={laptop} alt='Illustrated laptop with bright colours' fluid />
                  </Col>
                  <Col xs={12} md={6} className='d-flex align-items-center'>
                    <SkillDetailText>
                      I started my final year at university, where I developed Vocalia, a web-based podcast consumption
                      and creation platform built with .NET Core and React. This won the British Computer Society award
                      during ExpoTees, the university's project exhibition day.
                    </SkillDetailText>
                  </Col>
                </Row>
              </Container>
            </SkillCard>
          </Col>
          <Col xs={12} className='mb-4'>
            <SkillCard disabled title='DuPont Teijin Films (2017-2018)'>
              <Container fluid className='mt-3'>
                <Row>
                  <Col xs={12} md={6} className='d-flex align-items-center'>
                    <RoundedImage src={office} alt='Illustrated man working.' fluid />
                  </Col>
                  <Col xs={12} md={6} className='d-flex align-items-center'>
                    <SkillDetailText>
                      My first development role was a placement year at DuPont Teijin Films, where I worked on a variety
                      of internal C# plotting and management applications, managed and maintained database, and provided
                      support across the business.
                    </SkillDetailText>
                  </Col>
                </Row>
              </Container>
            </SkillCard>
          </Col>
          <Col xs={12} className='mb-4'>
            <SkillCard disabled title='Teesside University - 1st and 2nd Year (2015-2017)'>
              <Container fluid className='mt-3'>
                <Row>
                  <Col xs={12} md={6} className='d-flex align-items-center'>
                    <RoundedImage src={university} alt="Golden university building on a summer's day." fluid />
                  </Col>
                  <Col xs={12} md={6} className='d-flex align-items-center'>
                    <SkillDetailText>
                      I began my BSc in Computer Science at Teesside University, located in Middlesbrough, UK.
                    </SkillDetailText>
                  </Col>
                </Row>
              </Container>
            </SkillCard>
          </Col>
        </Row>
      </OverflowContainer>
    </DetailCard>
  );
};

export default History;
