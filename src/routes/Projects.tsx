import React, { useState } from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';

import { DetailCard } from '../views/card/DetailCard';
import { SkillCard } from '../views/card/SkillCard';

import vocalia from '../assets/vocalia.png';
import groupr from '../assets/groupr.png';
import { Modal } from '../views/modal/Modal';

const RoundedImage = styled(Image)`
  border-radius: 16px;
`;

const Projects = () => {
  const [isVocaliaVisible, setVocaliaVisible] = useState(false);
  const [isGrouprVisible, setGrouprVisible] = useState(false);

  return (
    <>
      <DetailCard title='Projects' description="Side projects I've worked on in my spare time.">
        <Col xs={12} sm={6} className='mb-4'>
          <SkillCard title='Vocalia' onClick={() => setVocaliaVisible(true)}>
            <RoundedImage src={vocalia} fluid />
          </SkillCard>
        </Col>

        <Col xs={12} sm={6} className='mb-4' onClick={() => setGrouprVisible(true)}>
          <SkillCard title='Groupr'>
            <RoundedImage src={groupr} fluid />
          </SkillCard>
        </Col>
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