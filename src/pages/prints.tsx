import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';

import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelSubtitle,
    TwoPanelTitle,
    TwoPanelImage,
    PrintCard,
    CardList,
    TwoPanelBody,
    LinkButton,
} from '~components';
import { usePrintsOverview } from '~hooks/static-queries';
import { Layout, SEO } from '~views';

const PrintsIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelTitle as="h1">My Prints.</TwoPanelTitle>
                <TwoPanelSubtitle>
                    Find my various 3D prints below, with interactive models, images, and download links.
                </TwoPanelSubtitle>
                <TwoPanelBody>
                    <LinkButton w="full" variant="outline" href="#prints">
                        View Prints
                    </LinkButton>
                </TwoPanelBody>
            </TwoPanelBlock>

            <TwoPanelImage>
                <StaticImage
                    style={{ width: '100%', borderRadius: '12px' }}
                    src="../images/3d-printing-2.jpg"
                    alt="3D printer starting a print"
                    width={900}
                />
            </TwoPanelImage>
        </TwoPanel>
    );
};

const Prints: VFC = () => {
    const prints = usePrintsOverview();

    return (
        <Layout>
            <SEO
                title="Prints"
                description="3D printing projects I've made, with interactive models, pictures and downloads."
            />
            <PrintsIntro />
            <CardList id="prints">
                {prints.map(({ name, description, slug, publicUrl }) => {
                    return (
                        <PrintCard
                            key={slug}
                            to={`/prints/${slug}`}
                            title={name}
                            description={description}
                            modelUrl={publicUrl}
                        />
                    );
                })}
            </CardList>
        </Layout>
    );
};

export default Prints;
