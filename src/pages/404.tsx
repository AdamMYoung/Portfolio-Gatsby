import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';

import { Layout } from '~views';
import {
    LinkButton,
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelHeading,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components';

const NotFound: VFC = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle>Page not found.</TwoPanelTitle>
                    <TwoPanelSubtitle>Looks like you've taken a wrong turn...</TwoPanelSubtitle>
                </TwoPanelHeading>
                <TwoPanelBody>
                    <LinkButton w="full" replace href="/">
                        Home
                    </LinkButton>
                </TwoPanelBody>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    alt="Man lost in a field"
                    src="../images/404.jpg"
                    style={{ borderRadius: '12px' }}
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

export default NotFound;
