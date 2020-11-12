import React from 'react';
import styled from 'styled-components';

import splashBg from '../../assets/splash-bg.jpg';

const SplashStyle = styled.div<{ backgroundImage?: string }>`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${(props) => props.backgroundImage});
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

  @media screen and (max-width: 556px) {
    > h1 {
      font-size: 2.75rem;
    }
  }
`;

type Props = {
  backgroundImage?: string;
};

export const Splash: React.FC<Props> = (props) => {
  return (
    <SplashStyle id='home' backgroundImage={props.backgroundImage ?? splashBg}>
      <CenteredText>{props.children}</CenteredText>
    </SplashStyle>
  );
};
