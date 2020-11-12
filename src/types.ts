import * as contentful from 'contentful';

export type Post = {
  published: Date;
  updated: Date;
  url: string;
  title: string;
};

export type TileEntry = {
  iconName: string;
  text: string;
  filterKey: string;
};

export type ContentfulResult<T> = {
  fields: T;
};

export type ContentfulCollectionResult<T> = {
  items: T[];
};

export type ContentfulFile = {
  fileName: string;
  url: string;
};

export type ContentfulImage = {
  title: string;
  file: ContentfulFile;
};

export type Album = ContentfulResult<{
  featuredImage: ContentfulResult<ContentfulImage>;
  images: ContentfulResult<ContentfulImage>[];
  name: string;
}>;
