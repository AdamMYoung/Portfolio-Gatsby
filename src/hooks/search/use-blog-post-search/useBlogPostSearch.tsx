import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';

type SearchData = {
    index: string;
    store: any;
};

type BlogSearchResult = {
    title: string;
    topics: string[];
    slug: string;
    createdAt: string;
};

const useSearchData = (): SearchData => {
    const data = useStaticQuery(graphql`
        {
            localSearchBlogPosts {
                store
                index
            }
        }
    `);

    return data.localSearchBlogPosts;
};

export const useBlogPostSearch = (term: string): BlogSearchResult[] => {
    const { index, store } = useSearchData();
    const results = useFlexSearch(term, index, store, { tokenizer: 'full' });
    console.log(results);

    if (term.length < 3) return [];

    return results;
};
