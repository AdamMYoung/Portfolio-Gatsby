import { graphql, useStaticQuery } from 'gatsby';

type GithubStats = {
    totalContributions: number;
    repositories: Repository[];
};

type Repository = {
    name: string;
    description: string;
    languages: string[];
};

export const useGithubStats = (): GithubStats => {
    const { github } = useStaticQuery(graphql`
        {
            github {
                user(login: "AdamMYoung") {
                    contributionsCollection {
                        contributionCalendar {
                            totalContributions
                        }
                    }
                    repositories(
                        first: 100
                        orderBy: { field: PUSHED_AT, direction: DESC }
                        privacy: PUBLIC
                        isFork: false
                    ) {
                        nodes {
                            name
                            languages(first: 20) {
                                nodes {
                                    name
                                }
                            }
                            description
                        }
                    }
                }
            }
        }
    `);

    return {
        totalContributions: github.user.contributionsCollection.contributionCalendar.totalContributions,
        repositories: github.user.repositories.nodes.map((repo) => ({
            name: repo.name,
            description: repo.description,
            languages: repo.languages.nodes.map((lang) => lang.name),
        })),
    };
};
