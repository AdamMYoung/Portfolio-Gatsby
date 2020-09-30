import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { DetailCard } from '../views/card/DetailCard';
import { SkillCard } from '../views/card/SkillCard';

import vocalia from '../assets/vocalia.png';
import groupr from '../assets/groupr.png';
import { Modal } from 'aydev-components';

const RoundedImage = styled(Image)`
  border-radius: 16px;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
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

const Projects = () => {
  const [isVocaliaVisible, setVocaliaVisible] = useState(false);
  const [isGrouprVisible, setGrouprVisible] = useState(false);

  return (
    <>
      <DetailCard
        previousUrl='/skills'
        nextUrl='/history'
        title='Projects'
        description="Side projects I've worked on in my spare time. Click below to learn more."
      >
        <OverflowContainer fluid>
          <Row>
            <Col xs={12} className='mb-4'>
              <SkillCard title='Vocalia' onClick={() => setVocaliaVisible(true)}>
                <Container fluid className='mt-3'>
                  <Row>
                    <Col xs={12} md={6}>
                      <RoundedImage src={vocalia} alt="Vocalia's tiled interface" fluid />
                    </Col>
                    <Col xs={12} md={6}>
                      <SkillDetailText>
                        Podcast creation and consumption platform, developed in React and .NET Core.
                      </SkillDetailText>
                    </Col>
                  </Row>
                </Container>
              </SkillCard>
            </Col>

            <Col xs={12} className='mb-4' onClick={() => setGrouprVisible(true)}>
              <SkillCard title='Groupr'>
                <Container fluid className='mt-3'>
                  <Row>
                    <Col xs={12} md={6}>
                      <RoundedImage src={groupr} alt="Groupr's interface, with listed applications" fluid />
                    </Col>
                    <Col xs={12} md={6}>
                      <SkillDetailText>WPF app to create folders on your desktop in Windows 10.</SkillDetailText>
                    </Col>
                  </Row>
                </Container>
              </SkillCard>
            </Col>
          </Row>
        </OverflowContainer>
      </DetailCard>
      {isVocaliaVisible && (
        <Modal customFooter title='Vocalia' onClose={() => setVocaliaVisible(false)}>
          <p>
            Vocalia is a platform for consuming and creating podcasts, all within the browser. It features a
            microservice-based architecture for the back-end, and two SPA React apps for the front-end.
          </p>
          <Modal.Footer>
            <Button href='https://github.com/AdamMYoung/Vocalia-Listen' target='_blank'>
              View on GitHub
            </Button>
            <Button onClick={() => setVocaliaVisible(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
      {isGrouprVisible && (
        <Modal customFooter title='Groupr' onClose={() => setGrouprVisible(false)}>
          <p>
            A WPF application to add folders to the Windows taskbar. The application uses two separate components, one
            for managing groups and one for loading folders. Folders are selected via startup parameters passed into the
            folder application, which is then rendered above the taskbar when selected.
          </p>
          <Modal.Footer>
            <Button href='https://github.com/AdamMYoung/Groupr' target='_blank'>
              View on GitHub
            </Button>
            <Button onClick={() => setGrouprVisible(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Projects;
