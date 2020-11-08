import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

type Props = {
  title: string;
  variant?: 'light' | 'dark';
};

const SectionLayout = styled.div<{ variant?: 'light' | 'dark' }>`
    padding: 32px; 12px;
    min-height: 20vh;
    background-color: ${(props) => (props.variant === 'light' ? 'white' : 'black')}

    p {
        color: ${(props) => (props.variant === 'light' ? 'black' : 'white')}
    }
`;

export const Section: React.FC<Props> = (props) => {
  const { title, variant, children } = props;

  return (
    <SectionLayout variant={variant}>
      <Container fluid='lg'>
        <h2 className='mb-2'>{title}</h2>
        {children}
      </Container>
    </SectionLayout>
  );
};
