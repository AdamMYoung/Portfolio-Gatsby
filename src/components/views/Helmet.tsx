import React from 'react';
import { Helmet as RHelmet } from 'react-helmet';

export const Helmet = () => {
  return (
    <RHelmet>
      <meta charSet='utf-8' />
      <title>Portfolio</title>
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
        crossOrigin='anonymous'
      ></link>
    </RHelmet>
  );
};
