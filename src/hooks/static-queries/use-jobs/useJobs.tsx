import { graphql, useStaticQuery } from "gatsby"
import { IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image"

type JobListing = {
    companyName: string
    role: string
    languages: string[]
    services: string[]
    technologies: string[]
    startDate: Date
    endDate?: Date
    description: string
    image: IGatsbyImageData
}

export const useJobs = (): JobListing[] => {

    const { data } = useStaticQuery(graphql`
     {
            allContentfulPageJobRole {
                nodes {
                    companyName
                    role
                    technologies
                    languages
                    services
                    startDate
                    endDate
                    description {
                        description
                    }
                    image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(width: 600)
                            }
                        }
                    }
                }
            }
     }
    `)

    return data.allContentfulPageJobRole.nodes.map(node => ({
        companyName: node.companyName,
        role: node.role,
        languages: node.languages,
        services: node.services,
        technologies: node.technologies,
        startDate: new Date(node.startDate),
        endDate: node.endDate ? new Date(node.endDate) : undefined,
        description: node.description.description,
        image: node.image.localFile,
    }))
}