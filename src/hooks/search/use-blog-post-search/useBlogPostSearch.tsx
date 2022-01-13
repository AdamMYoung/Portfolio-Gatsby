import { useFlexSearch } from 'react-use-flexsearch';
import { useBlogIndex } from '~providers';

type BlogSearchResult = {
    title: string;
    topics: string[];
    slug: string;
    createdAt: string;
};

export const useBlogPostSearch = (term: string): BlogSearchResult[] => {
    const { index, store } = useBlogIndex();
    const results = useFlexSearch(term, index, store, { tokenizer: 'full' });

    return results;
};
