import React, { useState } from 'react';
import { faDatabase, faGlobe, faNetworkWired, faServer } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Col, Image } from 'react-bootstrap';
import sqlServer from '../assets/microsoft-sql-server.svg';

import { DetailCard } from '../views/card/DetailCard';
import { SkillCard } from '../views/card/SkillCard';
import { Modal } from '../views/modal/Modal';

const SkillIcon = styled.i`
  font-size: 48px;
  margin 4px 4px;
`;

const Skills = () => {
  const [isWebTechVisible, setWebTechVisible] = useState(false);
  const [isApiDevVisible, setApiDevVisible] = useState(false);
  const [isDatabaseDesignVisible, setDatabaseDesignVisible] = useState(false);
  const [isDevOpsVisible, setDevOpsVisible] = useState(false);

  return (
    <>
      <DetailCard title='Skills' description='A few of my skills as a software developer.'>
        <Col xs={12} sm={6} className='mb-4'>
          <SkillCard title='Web Technologies' icon={faGlobe} onClick={() => setWebTechVisible(true)}>
            <p>Developed enterprise solutions utilizing React, Gatsby, GIS frameworks and more.</p>
          </SkillCard>
        </Col>
        <Col xs={12} sm={6} className='mb-4'>
          <SkillCard title='API Development' icon={faNetworkWired} onClick={() => setApiDevVisible(true)}>
            <p>Built scalable, microservice-oriented APIs within .NET Core, documented using OpenAPI/Swagger.</p>
          </SkillCard>
        </Col>
        <Col xs={12} sm={6} className='mb-4'>
          <SkillCard title='Database Design' icon={faDatabase} onClick={() => setDatabaseDesignVisible(true)}>
            <p>
              Designed application data-structures utilizing bounded contexts, designed with scalability, efficiency and
              reportability in mind.
            </p>
          </SkillCard>
        </Col>
        <Col xs={12} sm={6} className='mb-4'>
          <SkillCard title='DevOps' icon={faServer} onClick={() => setDevOpsVisible(true)}>
            <p>
              Implemented a wide variety of CI/CD pipelines, making use of release gates and automated testing when
              deploy to the Microsoft Azure cloud.
            </p>
          </SkillCard>
        </Col>
      </DetailCard>

      {isWebTechVisible && (
        <Modal title='Web Technologies' onClose={() => setWebTechVisible(false)}>
          <p className='h4'>Technologies</p>
          <div className='d-flex flex-wrap'>
            <SkillIcon className='devicon-typescript-plain colored'></SkillIcon>
            <SkillIcon className='devicon-javascript-plain colored'></SkillIcon>
            <SkillIcon className='devicon-nodejs-plain colored'></SkillIcon>
            <SkillIcon className='devicon-react-plain colored'></SkillIcon>
            <SkillIcon className='devicon-html5-plain colored'></SkillIcon>
            <SkillIcon className='devicon-css3-plain colored'></SkillIcon>
            <SkillIcon className='devicon-bootstrap-plain colored'></SkillIcon>
            <SkillIcon className='devicon-sass-plain colored'></SkillIcon>
          </div>
          <hr />
          <p className='h4'>Projects</p>
          <ul>
            <li>Personal - Vocalia</li>
            <li>TerraQuest Solutions - Planning Portal</li>
            <li>TerraQuest Solutions - ReQuestaPlan</li>
          </ul>
        </Modal>
      )}
      {isApiDevVisible && (
        <Modal title='API Development' onClose={() => setApiDevVisible(false)}>
          <p className='h4'>Technologies</p>
          <div className='d-flex flex-wrap'>
            <SkillIcon className='devicon-csharp-plain colored'></SkillIcon>
            <SkillIcon className='devicon-dot-net-plain-wordmark colored'></SkillIcon>
            <SkillIcon className='devicon-express-original colored'></SkillIcon>
          </div>
          <hr />
          <p className='h4'>Projects</p>
          <ul>
            <li>Personal - Vocalia</li>
            <li>TerraQuest Solutions - Planning Portal</li>
            <li>TerraQuest Solutions - ReQuestaPlan</li>
          </ul>
        </Modal>
      )}
      {isDatabaseDesignVisible && (
        <Modal title='Database Design' onClose={() => setDatabaseDesignVisible(false)}>
          <p className='h4'>Technologies</p>
          <div className='d-flex flex-wrap'>
            <Image src={sqlServer} fluid height={48} width={48} />
            <SkillIcon className='devicon-mysql-plain colored'></SkillIcon>
            <SkillIcon className='devicon-postgresql-plain colored'></SkillIcon>
            <SkillIcon className='devicon-mongodb-plain colored'></SkillIcon>
          </div>
          <hr />
          <p className='h4'>Projects</p>
          <ul>
            <li>Personal - Vocalia</li>
            <li>TerraQuest Solutions - Planning Portal</li>
            <li>TerraQuest Solutions - ReQuestaPlan</li>
          </ul>
        </Modal>
      )}
      {isDevOpsVisible && (
        <Modal title='DevOps' onClose={() => setDevOpsVisible(false)}>
          <p className='h4'>Technologies</p>
          <div className='d-flex flex-wrap'>
            <SkillIcon className='devicon-npm-original-wordmark colored'></SkillIcon>
            <SkillIcon className='devicon-nginx-original colored'></SkillIcon>
            <SkillIcon className='devicon-webpack-plain colored'></SkillIcon>
            <SkillIcon className='devicon-git-plain colored'></SkillIcon>
            <SkillIcon className='devicon-github-plain colored'></SkillIcon>
          </div>
          <hr />
          <p className='h4'>Projects</p>
          <ul>
            <li>Personal - Vocalia</li>
            <li>TerraQuest Solutions - Planning Portal</li>
            <li>TerraQuest Solutions - ReQuestaPlan</li>
          </ul>
        </Modal>
      )}
    </>
  );
};

export default Skills;
