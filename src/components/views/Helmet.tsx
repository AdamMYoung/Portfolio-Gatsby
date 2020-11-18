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
    </RHelmet>
  );
};
