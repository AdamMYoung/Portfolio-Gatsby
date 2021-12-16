import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import React, { FC } from 'react';

import { useSiteInfo } from '~hooks/static-queries';

export type LinkProps = ChakraLinkProps & {
    replace?: boolean;
};

export const Link: FC<LinkProps> = ({ children, href, ...rest }) => {
    const { siteMetadata } = useSiteInfo();
    const { siteUrl } = siteMetadata;

    const url = href.startsWith(siteUrl) ? href.substring(siteUrl.length) : href;

    if (url?.startsWith('/') || url?.startsWith('#')) {
        return (
            <ChakraLink as={GatsbyLink} to={href} {...rest}>
                {children}
            </ChakraLink>
        );
    }

    return (
        <ChakraLink {...rest} href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </ChakraLink>
    );
};
