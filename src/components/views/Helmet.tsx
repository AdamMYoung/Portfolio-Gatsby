import React from 'react';
import { Helmet as RHelmet } from 'react-helmet';

type Props = {
  title: string;
};

export const Helmet = (props: Props) => {
  return (
    <RHelmet>
      <meta charSet='utf-8' />
      <title>{props.title}</title>
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
        crossOrigin='anonymous'
      ></link>
    </RHelmet>
  );
};
