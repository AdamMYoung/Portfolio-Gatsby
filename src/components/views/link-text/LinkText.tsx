import React from 'react';
import styled from 'styled-components';

import { Link } from '../../../types';

const Description = styled.p`
  font-weight: light;
  font-size: 1.5rem;

  > a {
    font-size: 1.75rem;
    cursor: pointer;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.color.primary};

    &:focus {
      color: ${(props) => props.theme.color.primary};
    }

    &:hover {
      color: ${(props) => props.theme.color.primary};
      text-decoration: none;
    }
  }
`;

const SocialLink = styled.a`
  color: gray;
  margin-right: 1rem;
  cursor: pointer;

  &:focus {
    color: gray;
  }

  &:hover {
    color: gray;
    text-decoration: none;
  }
`;

type Props = {
  links: Link[];
};

export const LinkText: React.FC<Props> = (props) => {
  const { links, children } = props;
  return (
    <>
      <Description>{children}</Description>
      <div className='d-flex mt-4'>
        {links.map((link) => (
          <SocialLink href={link.url} target='_blank' rel='noopener'>
            {link.name}
          </SocialLink>
        ))}
      </div>
    </>
  );
};
