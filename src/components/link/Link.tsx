import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import React, { FC, forwardRef } from 'react';

import { SiteInfo, useSiteInfo } from '~hooks/static-queries';

export type LinkProps = ChakraLinkProps & {
    replace?: boolean;
};

const parseHref = (href: string, siteInfo: SiteInfo): string => {
    const { siteUrl, siteWwwUrl } = siteInfo.siteMetadata;

    if (href?.startsWith(siteUrl)) {
        return href.substring(siteUrl.length);
    }
    if (href?.startsWith(siteWwwUrl)) {
        return href.substring(siteWwwUrl.length);
    }

    return href;
};

export const Link = forwardRef<HTMLElement, LinkProps>(({ children, href, ...rest }, ref) => {
    const siteInfo = useSiteInfo();
    const url = parseHref(href, siteInfo);

    if (url?.startsWith('/') || url?.startsWith('#')) {
        return (
            <ChakraLink ref={ref} as={GatsbyLink} to={url} {...rest}>
                {children}
            </ChakraLink>
        );
    }

    return (
        <ChakraLink ref={ref} {...rest} href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </ChakraLink>
    );
});
