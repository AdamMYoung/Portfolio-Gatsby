import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet as RHelmet } from 'react-helmet';

type Props = {
  title: string;
};

export const Helmet = (props: Props) => {
  const data = useStaticQuery(graphql`
    query getSiteQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <RHelmet>
      <meta charSet='utf-8' />
      <meta property='og:title' content={props.title} />
      <meta property='og:url' content={data.site.siteMetadata.siteUrl} />

      <title>{props.title}</title>
    </RHelmet>
  );
};
