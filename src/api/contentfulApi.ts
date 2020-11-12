import * as contentful from 'contentful';
import { Album, ContentfulCollectionResult } from '../types';

const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_ID ?? '',
  accessToken: process.env.REACT_APP_CONTENTFUL_KEY ?? '',
});

export const getAlbums = async (): Promise<ContentfulCollectionResult<Album>> => {
  return await contentfulClient
    .getEntries({ content_type: 'album' })
    .then((data) => (data as unknown) as ContentfulCollectionResult<Album>);
};
