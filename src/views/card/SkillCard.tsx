import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

import { Card } from './Card';

const StyledCard = styled(Card)`
  transition: background-color 0.2s;

  &:hover {
    background-color: #ebebeb;
    cursor: pointer;
  }
`;

type Props = {
  title: string;
  icon: IconProp;
  onClick?: () => void;
};

export const SkillCard: React.FC<Props> = (props) => {
  const { title, icon, children, onClick } = props;

  return (
    <Col xs={12} sm={6} className='mb-4'>
      <StyledCard onClick={onClick}>
        <div className='d-flex'>
          <FontAwesomeIcon size='2x' icon={icon} className='mr-3' />
          <div>
            <p className='h5'>{title}</p>
            {children}
          </div>
        </div>
      </StyledCard>
    </Col>
  );
};
