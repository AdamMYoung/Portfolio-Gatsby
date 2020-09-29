import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'aydev-components';
import React from 'react';

type Props = {
  title: string;
  disabled?: boolean;
  icon?: IconProp;
  onClick?: () => void;
};

export const SkillCard: React.FC<Props> = (props) => {
  const { title, icon, children, disabled, onClick } = props;

  return (
    <Card onClick={onClick} interactable={disabled}>
      <div className='d-flex'>
        {icon && <FontAwesomeIcon size='2x' icon={icon} className='mr-3' />}
        <div>
          <p className='h5'>{title}</p>
          {children}
        </div>
      </div>
    </Card>
  );
};
