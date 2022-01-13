import { graphql, useStaticQuery } from 'gatsby';

type Use = {
    name: string;
    description: {
        description: string;
    };
    link: string;
};

type UseCategory = {
    name: string;
    uses: Use[];
};

/**
 * Static data hook to return the things I use on a day-to-day basis.
 */
export const useUses = (): UseCategory[] => {
    const data = useStaticQuery(graphql`
        {
            allContentfulUsesCollection {
                nodes {
                    name
                    uses {
                        name
                        link
                        description {
                            description
                        }
                    }
                }
            }
        }
    `);

    return data.allContentfulUsesCollection.nodes;
};
