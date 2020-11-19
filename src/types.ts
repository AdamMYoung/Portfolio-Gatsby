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
