import { useQuery } from 'react-query';
import { getAlbums } from '../api/contentfulApi';

export const useAlbums = () => {
  return useQuery('getAlbums', getAlbums, {
    cacheTime: 36000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};
