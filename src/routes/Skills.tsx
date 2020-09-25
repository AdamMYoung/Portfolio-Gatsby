import React, { useState } from 'react';
import { faDatabase, faGlobe, faNetworkWired, faServer } from '@fortawesome/free-solid-svg-icons';

import { DetailCard } from '../views/card/DetailCard';
import { SkillCard } from '../views/card/SkillCard';
import { Modal } from '../views/modal/Modal';

const Skills = () => {
  const [isWebTechVisible, setWebTechVisible] = useState(false);
  const [isApiDevVisible, setApiDevVisible] = useState(false);
  const [isDatabaseDesignVisible, setDatabaseDesignVisible] = useState(false);
  const [isDevOpsVisible, setDevOpsVisible] = useState(false);

  return (
    <>
      <DetailCard title='Skills' description='A few of my skills as a software developer.'>
        <SkillCard title='Web Technologies' icon={faGlobe} onClick={() => setWebTechVisible(true)}>
          <p>Developed enterprise solutions utilizing React, Gatsby, GIS frameworks and more.</p>
        </SkillCard>
        <SkillCard title='API Development' icon={faNetworkWired} onClick={() => setApiDevVisible(true)}>
          <p>Built scalable, microservice-oriented APIs within .NET Core, documented using OpenAPI/Swagger.</p>
        </SkillCard>
        <SkillCard title='Database Design' icon={faDatabase} onClick={() => setDatabaseDesignVisible(true)}>
          <p>
            Designed application data-structures utilizing bounded contexts, designed with scalability, efficiency and
            reportability in mind.
          </p>
        </SkillCard>
        <SkillCard title='DevOps' icon={faServer} onClick={() => setDevOpsVisible(true)}>
          <p>
            Implemented a wide variety of CI/CD pipelines, making use of release gates and automated testing when deploy
            to the Microsoft Azure cloud.
          </p>
        </SkillCard>
      </DetailCard>

      {isWebTechVisible && <Modal title='Web Technologies' onClose={() => setWebTechVisible(false)} />}
      {isApiDevVisible && <Modal title='API Development' onClose={() => setApiDevVisible(false)} />}
      {isDatabaseDesignVisible && <Modal title='Database Design' onClose={() => setDatabaseDesignVisible(false)} />}
      {isDevOpsVisible && <Modal title='DevOps' onClose={() => setDevOpsVisible(false)} />}
    </>
  );
};

export default Skills;
