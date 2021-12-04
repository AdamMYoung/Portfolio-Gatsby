import React, { FC } from 'react';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

export const Link: FC<ChakraLinkProps> = ({ children, href, ...rest }) => {
    if (href?.startsWith('/') || href?.startsWith('#')) {
        return (
            <ChakraLink as={GatsbyLink} to={href} {...rest}>
                {children}
            </ChakraLink>
        );
    }

    return (
        <ChakraLink {...rest} href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </ChakraLink>
    );
};
