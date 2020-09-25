import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { faDatabase, faGlobe, faNetworkWired, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Card } from '../views/card/Card';
import { DetailCard } from '../views/card/DetailCard';

type ProjectCardProps = {
  title: string;
  icon: IconProp;
};

const SkillCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <Col xs={12} sm={6} className='mb-4'>
      <Card>
        <div className='d-flex'>
          <FontAwesomeIcon size='2x' icon={props.icon} className='mr-3' />
          <div>
            <p className='h5'>{props.title}</p>
            {props.children}
          </div>
        </div>
      </Card>
    </Col>
  );
};

const Home = () => {
  return (
    <DetailCard>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Skills</h2>
          </Col>
          <SkillCard title='Web Technologies' icon={faGlobe}>
            <p>Developed enterprise solutions utilizing React, Gatsby, GIS frameworks and more.</p>
          </SkillCard>
          <SkillCard title='API Development' icon={faNetworkWired}>
            <p>Built scalable, microservice-oriented APIs within .NET Core, documented using OpenAPI/Swagger.</p>
          </SkillCard>
          <SkillCard title='Database Design' icon={faDatabase}>
            <p>
              Designed application data-structures utilizing bounded contexts, designed with scalability, efficiency and
              reportability in mind.
            </p>
          </SkillCard>
          <SkillCard title='DevOps' icon={faServer}>
            <p>
              Implemented a wide variety of CI/CD pipelines, making use of release gates and automated testing when
              deploy to the Microsoft Azure cloud.
            </p>
          </SkillCard>
        </Row>
      </Container>
    </DetailCard>
  );
};

export default Home;
