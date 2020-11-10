import React from 'react';
import styled from 'styled-components';

import splashBg from '../../assets/splash-bg.jpg';

const SplashStyle = styled.div<{ backgroundImage?: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 100vh;
`;

const CenteredText = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
  -webkit-transform: translate(0%, -50%);
  text-align: center;
  color: white;

  > h1 {
    font-size: 4.5rem;
  }

  > h2 {
    font-size: 1.3rem;
  }
`;

export const Splash = () => {
  return (
    <SplashStyle id='home' backgroundImage={splashBg}>
      <CenteredText>
        <h1 className='font-weight-bold'>Adam Young</h1>
        <h2>Software Developer</h2>
        <h2>Photographer</h2>
        <h2>Based in Birmingham, UK</h2>
      </CenteredText>
    </SplashStyle>
  );
};
