import React from 'react';
import styled from 'styled-components';

const SplashStyle = styled.div`
  height: 100vh;
`;

const CenteredText = styled.div`
  position: absolute;
  width: 100vw;
  top: 60%;
  left: 0%;
  transform: translate(0%, -60%);
  -webkit-transform: translate(0%, -60%);
  text-align: center;

  > h1 {
    font-size: 4rem;
  }

  > h2 {
    font-size: 1.75rem;
  }
`;

export const Splash = () => {
  return (
    <SplashStyle>
      <CenteredText>
        <h1>Adam Young</h1>
        <h2>Software Developer</h2>
        <h2>Photographer</h2>
      </CenteredText>
    </SplashStyle>
  );
};
