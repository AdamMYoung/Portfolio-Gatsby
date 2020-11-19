import GatsbyImage, { FixedObject, FluidObject } from 'gatsby-image';

export type Post = {
  published: Date;
  updated: Date;
  url: string;
  title: string;
};

export type Experience = {
  date: string;
  jobTitle: string;
  company: string;
};

export type Link = {
  name: string;
  url: string;
};

export type TileEntry = {
  iconName: string;
  text: string;
  filterKey: string;
};

//Contentful

export type ContentfulFluidImage = {
  fluid: FluidObject;
};

export type ContentfulFixedImage = {
  fixed: FixedObject;
};

type ContentfulEntry<TTypeName> = {
  internal: {
    type: TTypeName;
  };
};

type ContentfulRichText = {
  raw: string;
};

type ContentfulSkill = {
  category: string;
  description: {
    description: string;
  };
  devIconCssName: string;
  name: string;
};

export type ContentfulPage = {
  name: string;
  sections: ContentfulSection[];
  splash: ContentfulSplash;
};

export type ContentfulSection = {
  title: string;
  variant: 'light' | 'gray' | 'dark';
  content: ContentfulSectionContentTypes[];
};

export type ContentfulText = ContentfulEntry<'ContentfulText'> & {
  content: ContentfulRichText;
  links: Link[];
};

export type ContentfulSkillSet = ContentfulEntry<'ContentfulSkillSet'> & {
  skills: ContentfulSkill[];
};

export type ContentfulProject = ContentfulEntry<'ContentfulProject'> & {
  name: string;
  image: ContentfulFluidImage;
  description: ContentfulRichText;
  links: Link[];
};

export type ContentfulExperienceSet = ContentfulEntry<'ContentfulExperienceSet'> & {
  experienceHistory: Experience[];
};

export type ContentfulAlbum = ContentfulEntry<'ContentfulAlbum'> & {
  name: string;
  featuredImage: ContentfulFixedImage;
};

export type ContentfulContact = ContentfulEntry<'ContentfulContact'> & {
  name: string;
};

export type ContentfulSplash = {
  name: string;
  background: ContentfulFluidImage;
  content: ContentfulRichText;
};

export type ContentfulSectionContentTypes =
  | ContentfulText
  | ContentfulSkillSet
  | ContentfulProject
  | ContentfulExperienceSet
  | ContentfulAlbum
  | ContentfulContact;
