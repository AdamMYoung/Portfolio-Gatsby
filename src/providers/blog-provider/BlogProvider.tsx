import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { createContext } from '@chakra-ui/react-utils';

import { useBlogPosts } from '~hooks/static-queries';
import { useFilter, useToggleSet } from '~hooks';
import { BlogPost } from '~types';

type BlogContextOptions = {
    results: BlogPost[];
    searchTerm: string;
    applicableFilters: string[];
    selectedFilters: string[];
    onFilterToggled: (filter: string) => void;
    onSearchTermChanged: (searchTerm: string) => void;
    onReset: () => void;
};

const [BlogContextProvider, useBlogs] = createContext<BlogContextOptions>();

export { useBlogs };

export const BlogProvider: FC = ({ children }) => {
    const [selectedFilters, toggleFilter, resetFilters] = useToggleSet<string>();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const blogs = useBlogPosts();

    /**
     * Filters the existing blog posts by the search term provided.
     */
    const filteredByTermBlogs = useFilter(
        blogs,
        searchTerm,
        (blog, filter) => blog.title.includes(filter) || !!blog.topics.find((topic) => topic.includes(filter))
    );

    /**
     * Filters the search result by the blog filters provided.
     */
    const filteredByFiltersBlogs = useFilter(filteredByTermBlogs, selectedFilters, (blog, filters) =>
        filters.reduce((prev: boolean, curr) => (prev === false ? false : blog.topics.includes(curr)), true)
    );

    /**
     * Builds a list of the applicable filters for the blog posts.
     */
    const applicableFilters = useMemo(() => {
        const filters = new Set<string>();

        filteredByFiltersBlogs.forEach((blog) => blog.topics.forEach((topic) => filters.add(topic)));

        return Array.from(filters);
    }, [filteredByFiltersBlogs]);

    /**
     * Resets the currently selected filters and search term.
     */
    const handleReset = useCallback(() => {
        resetFilters();
        setSearchTerm('');
    }, [resetFilters, setSearchTerm]);

    const value: BlogContextOptions = {
        results: filteredByFiltersBlogs,
        applicableFilters,
        selectedFilters,
        searchTerm,
        onFilterToggled: toggleFilter,
        onSearchTermChanged: setSearchTerm,
        onReset: handleReset,
    };

    return <BlogContextProvider value={value}>{children}</BlogContextProvider>;
};
