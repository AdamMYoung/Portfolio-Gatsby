import { BlogPost } from '~types';

type FilterContextOptions = {
    blogResults: BlogPost[];
    onFilterChanged: (filter: string) => void;
    onFilterCleared: () => void;
};

export const BlogProvider = () => {};
