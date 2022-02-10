import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type Recommendation = {
    profilePicture: IGatsbyImageData;
    name: string;
    company: string;
    role: string;
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
                    role
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
        role: node.role,
        profilePicture: node.profilePicture.localFile,
    }));
};
