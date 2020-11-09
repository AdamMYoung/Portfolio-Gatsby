import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

type Props = {
  title: string;
  variant?: 'light' | 'dark';
  icon?: IconProp;
};

const SectionLayout = styled.div<{ variant?: 'light' | 'dark' }>`
  padding: 86px 24px;
  min-height: 20vh;
  background-color: ${(props) => (props.variant === 'light' ? 'white' : '#f1f1f1')};
`;

const ColouredText = styled.div<{ variant?: 'light' | 'dark' }>`
  color: black;

  p {
    font-weight: light;
  }

  svg {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const Section: React.FC<Props> = (props) => {
  const { title, variant, icon, children } = props;

  return (
    <SectionLayout variant={variant}>
      <Container fluid='lg'>
        <ColouredText variant={variant}>
          <div className='d-flex mb-3'>
            {icon && <FontAwesomeIcon className='mr-4' icon={icon} size='2x' />}
            <h3 className='mb-2'>{title}</h3>
          </div>
          {children}
        </ColouredText>
      </Container>
    </SectionLayout>
  );
};
