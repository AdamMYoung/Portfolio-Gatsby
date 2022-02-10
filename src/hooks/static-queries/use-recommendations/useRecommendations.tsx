import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';

type Recommendation = {
    profilePicture: IGatsbyImageData;
    name: string;
    company: string;
    text: string;
};

export const useRecommendations = (): Recommendation[] => {
    const data = useStaticQuery(graphql`
        {
            allContentfulRecommendation(sort: { fields: dateSubmitted, order: DESC }) {
                nodes {
                    name
                    text {
                        text
                    }
                    company
                    profilePicture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(width: 40)
                            }
                        }
                    }
                }
            }
        }
    `);

    return data.allContentfulRecommendation.nodes.map((node) => ({
        company: node.company,
        name: node.name,
        text: node.text.text,
        profilePicture: node.profilePicture.localFile,
    }));
};
