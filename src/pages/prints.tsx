import { Stack } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { VFC } from 'react';
import { CardList } from '~components/card-list';
import { LinkButton } from '~components/link-button';
import { PrintCard } from '~components/print-card';
import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelBody,
    TwoPanelImage,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '~components/sections/two-panel';
import { usePrintsOverview } from '~hooks/static-queries';
import { SEO } from '~views/seo';

const PrintsIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelTitle as="h1">3D Models.</TwoPanelTitle>
                <TwoPanelSubtitle>
                    Find my various 3D models below, with interactivity, images, and download links.
                </TwoPanelSubtitle>
                <TwoPanelBody>
                    <LinkButton w="full" variant="outline" href="#prints">
                        View Models
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
        <Stack spacing={[16, null, 24]}>
            <SEO
                title="Prints"
                description="3D printing projects I've made, with interactive models, pictures and downloads."
                canonical="/prints/"
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
        </Stack>
    );
};

export default Prints;
