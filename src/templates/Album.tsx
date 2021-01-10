import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import { useFullScreenStatus } from '../providers/full-screen-provider';
import 'react-image-lightbox/style.css';

type ContentSchema = {
    contentfulAlbum: {
        name: string;
        images: {
            id: string;
            fixed: FixedObject;
            file: {
                url: string;
            };
        }[];
    };
};

type Props = {
    data: ContentSchema;
};

const Album = ({ data }: Props) => {
    const { name, images } = data.contentfulAlbum;
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const { setFullScreen } = useFullScreenStatus();

    useEffect(() => {
        setFullScreen(selectedIndex !== null);
        return () => setFullScreen(false);
    }, [selectedIndex, setFullScreen]);

    return (
        <Layout title={name}>
            <Helmet>
                {images.map((image) => (
                    <>
                        <meta property="og:image" content={image.fixed.src} />
                        <meta property="og:image:width" content={image.fixed.width.toString()} />
                        <meta property="og:image:height" content={image.fixed.height.toString()} />
                        {image.fixed.media && <meta property="og:image:type" content={image.fixed.media} />}
                    </>
                ))}
            </Helmet>

            {selectedIndex !== null && (
                <Lightbox
                    mainSrc={images[selectedIndex].file.url}
                    prevSrc={images[(selectedIndex + images.length - 1) % images.length].file.url}
                    nextSrc={images[(selectedIndex + 1) % images.length].file.url}
                    mainSrcThumbnail={images[selectedIndex].fixed.src}
                    prevSrcThumbnail={images[(selectedIndex + images.length - 1) % images.length].fixed.src}
                    nextSrcThumbnail={images[(selectedIndex + 1) % images.length].fixed.src}
                    onMovePrevRequest={() => setSelectedIndex((selectedIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setSelectedIndex((selectedIndex + 1) % images.length)}
                    onCloseRequest={() => setSelectedIndex(null)}
                />
            )}
        </Layout>
    );
};

export default Album;

export const query = graphql`
    query albumQuery($name: String!) {
        contentfulAlbum(name: { eq: $name }) {
            name
            images {
                id
                fixed(width: 400, quality: 25) {
                    ...GatsbyContentfulFixed_withWebp_noBase64
                }
                file {
                    url
                }
            }
        }
    }
`;
