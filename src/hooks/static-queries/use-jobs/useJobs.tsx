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

  const data = useStaticQuery(graphql`
     {
      allContentfulPageJobRole(sort: {fields: startDate, order: DESC}) {
    nodes {
      endDate
      startDate
      role
      services
      languages
      technologies
      description {
        description
      }
      companyName
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  }
}
    `)

  console.log(data)

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