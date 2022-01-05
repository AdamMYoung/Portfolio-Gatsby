import { ImageDataLike } from 'gatsby-plugin-image';

export type BlogPostOverview = {
    createdAt: string;
    id: string;
    topics: string[];
    title: string;
    slug: string;
    copy: {
        readingTime: string;
    };
    heroImage: { localFile: ImageDataLike };
};

export type BlogPost = {
    createdAt: string;
    updatedAt: string;
    id: string;
    topics: string[];
    title: string;
    summary: {
        summary: string;
    };
    slug: string;
    copy: {
        copy: string;
        readingTime: string;
    };
    heroImage: {
        localFile: ImageDataLike & {
            publicURL: string;
        };
    };
};

export type PrintEntry = {
    name: string;
    slug: string;
    description: {
        description: string;
    };
    stlFile: {
        localFile: {
            publicURL: string;
        };
    };
    printImages?: {
        localFile: ImageDataLike;
    }[];
};
