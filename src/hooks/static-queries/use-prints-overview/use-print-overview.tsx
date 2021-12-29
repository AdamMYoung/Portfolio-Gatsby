import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type PrintOverview = {
    name: string;
    slug: string;
    description: string;
    image: IGatsbyImageData;
};

export const usePrintsOverview = (): PrintOverview[] => {
    const data = useStaticQuery(graphql`
        {
            allContentful3DPrintModel {
                nodes {
                    name
                    slug
                    description {
                        description
                    }
                    printImages {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(width: 600)
                            }
                        }
                    }
                }
            }
        }
    `);

    return data.allContentful3DPrintModel.nodes.map(({ name, description, slug, printImages }) => ({
        name,
        slug,
        description: description.description,
        image: printImages[0].localFile,
    }));
};
