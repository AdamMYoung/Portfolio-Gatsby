import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

type PrintOverview = {
    name: string;
    slug: string;
    description: string;
    image: IGatsbyImageData;
    publicUrl: string;
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
                    stlFile {
                        localFile {
                            publicURL
                        }
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

    return data.allContentful3DPrintModel.nodes.map(({ name, description, slug, printImages, stlFile }) => ({
        name,
        slug,
        description: description.description,
        image: printImages?.[0].localFile,
        publicUrl: stlFile.localFile.publicURL,
    }));
};
