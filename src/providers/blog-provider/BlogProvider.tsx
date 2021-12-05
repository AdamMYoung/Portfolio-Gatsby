import { BlogPost } from '../../type';

type FilterContextOptions = {
    blogResults: BlogPost[];
    onFilterChanged: (filter: string) => void;
    onFilterCleared: () => void;
};

export const BlogProvider = () => {};
