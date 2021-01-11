import * as React from 'react';
import Img from 'gatsby-image';

import List from '../components/list';
import image from '../images/Remote working challenges.svg';
import InfoPage from '../views/info-page';
import { graphql, navigate } from 'gatsby';

// markup
const Index = ({ data }) => {
    return (
        <InfoPage
            title="Photography"
            description="A collection of the best images I've managed to capture."
            src={image}
            alt="Illustration of man working on a laptop in a tent"
        >
            <h1 className="text-5xl font-bold mb-4">Photography</h1>
            <p className="text-lg font-semibold">
                Below are the highlights of what I've managed to capture since starting photography.
            </p>

            <div className="mt-24">
                <h2 className="text-4xl font-bold mb-4">Albums</h2>
                <List>
                    {data.allContentfulAlbum.edges.map(({ node }) => (
                        <List.Item
                            onClick={() => navigate(`/photography/${encodeURIComponent(node.name.toLowerCase())}`)}
                        >
                            <Img
                                className="cursor-pointer hover:opacity-60 transition max-w-lg my-2 rounded-lg"
                                fluid={node.featuredImage.fluid}
                            />
                        </List.Item>
                    ))}
                </List>
            </div>
        </InfoPage>
    );
};

export const query = graphql`
    {
        allContentfulAlbum {
            edges {
                node {
                    name
                    featuredImage {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp_noBase64
                        }
                    }
                }
            }
        }
    }
`;

export default Index;
