import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { Card } from './Card';

const StyledCard = styled(Card)`
  transition: background-color 0.2s;
  box-shadow: ${(props) => (props.disabled ? '0px 0px 3px lightgray' : '0px 0px 10px lightgray')};

  &:hover {
    background-color: ${(props) => (props.disabled ? 'white' : '#ebebeb')};
    cursor: ${(props) => (props.disabled ? 'normal' : 'pointer')};
  }

  p {
    margin-bottom: 0;
  }
`;

type Props = {
  title: string;
  disabled?: boolean;
  icon?: IconProp;
  onClick?: () => void;
};

export const SkillCard: React.FC<Props> = (props) => {
  const { title, icon, children, disabled, onClick } = props;

  return (
    <StyledCard onClick={onClick} disabled={disabled}>
      <div className='d-flex'>
        {icon && <FontAwesomeIcon size='2x' icon={icon} className='mr-3' />}
        <div>
          <p className='h5'>{title}</p>
          {children}
        </div>
      </div>
    </StyledCard>
  );
};
