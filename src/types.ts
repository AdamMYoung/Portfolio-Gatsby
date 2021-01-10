//Contentful

import { FixedObject, FluidObject } from 'gatsby-image';

export type FluidImageSharp = {
    childImageSharp: {
        fluid: FluidObject;
    };
};

//Root Types

type ContentfulEntry<TTypeName extends string> = {
    internal: {
        type: TTypeName;
    };
};

export type ContentfulBlogPost = ContentfulEntry<'ContentfulBlogPost'> & {
    title: string;
    headerImage: ContentfulFluidImage;
    content: ContentfulRichText;
};

//Element types.

export type ContentfulFluidImage = {
    fluid: FluidObject;
};

export type ContentfulFixedImage = {
    fixed: FixedObject;
};

type ContentfulRichText = {
    raw: string;
};

export type ContentfulAlbum = ContentfulEntry<'ContentfulAlbum'> & {
    name: string;
    featuredImage: ContentfulFixedImage;
};

export type ContentfulSectionContentTypes = ContentfulAlbum;
