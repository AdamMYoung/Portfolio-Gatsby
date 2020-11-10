import { TileEntry } from './types';

const FilterKeys = {
  web: 'Web',
  backend: 'Back-end',
  database: 'Database',
  devops: 'DevOps',
};

export const Skills: TileEntry[] = [
  {
    iconName: 'devicon-typescript-plain colored',
    text: 'Type safety and C#-esque syntax make TypeScript my go-to language for front-end development',
    filterKey: FilterKeys.web,
  },
  {
    iconName: 'devicon-javascript-plain colored',
    text:
      "When working on older projects or quickly prototyping, JavaScript is the 2nd choice due to the looseness of the language and fluidity of it's typing",
    filterKey: FilterKeys.web,
  },
  {
    iconName: 'devicon-react-plain colored',
    text:
      'React is my go-to library for modern SPA development, due to component-based development and a clear data flow.',
    filterKey: FilterKeys.web,
  },
  {
    iconName: 'devicon-bootstrap-plain colored',
    text:
      "I'm very familiar with bootstrap's container system, and have used it across multiple applications with great success. ",
    filterKey: FilterKeys.web,
  },
  {
    iconName: 'devicon-dot-net-plain-wordmark colored',
    text:
      'I have a wide range of experience developing in .net, ranging from WPF to MVC in both .NET framework and .NET Core in micro-service architectures.',
    filterKey: FilterKeys.backend,
  },
  {
    iconName: 'devicon-express-original',
    text: "From my TypeScript experience, I'm comfortable working with express.js as a back-end framework.",
    filterKey: FilterKeys.backend,
  },
  {
    iconName: 'devicon-postgresql-plain colored',
    text:
      'I have experience with various relational databases such as MySQL, PostgreSQL and SQL Server, implemented across a variety of projects and frameworks.',
    filterKey: FilterKeys.database,
  },
  {
    iconName: 'devicon-mongodb-plain colored',
    text: 'I also have experience with NoSQL databases, such as MongoDB and Azure Cosmos DB in a variety of scenarios.',
    filterKey: FilterKeys.database,
  },
  {
    iconName: 'devicon-npm-original-wordmark colored',
    text:
      "Within Azure DevOps I've developed numerous CI/CD pipelines for various Node projects. I've also developed and published components to the NPM repository.",
    filterKey: FilterKeys.devops,
  },
  {
    iconName: 'devicon-github-plain',
    text:
      'I also have an extensive history of using and publishing open source projects on GitHub. I believe that everybody can benefit from open source solutions.',
    filterKey: FilterKeys.devops,
  },
];
