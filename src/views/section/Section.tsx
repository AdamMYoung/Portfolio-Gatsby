import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

type StyleVariants = 'light' | 'gray' | 'dark';

type Props = {
  title: string;
  variant?: StyleVariants;
  icon?: IconProp;
};

const SectionLayout = styled.div<{ variant?: StyleVariants }>`
  padding: 86px 24px;
  min-height: 20vh;
  background-color: ${(props) => {
    if (props.variant === 'light') return 'white';
    if (props.variant === 'gray') return '#f1f1f1';
    return '#151515';
  }};
`;

const ColouredText = styled.div<{ variant?: StyleVariants }>`
  color: ${(props) => (props.variant === 'dark' ? 'white' : 'black')};

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
