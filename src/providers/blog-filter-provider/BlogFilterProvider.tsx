import React, { FC, useCallback, useMemo } from 'react';
import { createContext } from '@chakra-ui/react-utils';

import { useBlogPosts } from '~hooks/static-queries';
import { useFilter, useToggleSet } from '~hooks';
import { BlogPostOverview } from '~types';

type BlogFilterContextOptions = {
    results: BlogPostOverview[];
    applicableFilters: string[];
    selectedFilters: string[];
    onFilterToggled: (filter: string) => void;
    onReset: () => void;
};

const [BlogFilterContextProvider, useBlogFilter] = createContext<BlogFilterContextOptions>();

export { useBlogFilter };

/**
 * Provides blog and topic search and filtering to consuming components.
 */
export const BlogSearchProvider: FC = ({ children }) => {
    const [selectedFilters, toggleFilter, resetFilters] = useToggleSet<string>();

    const blogs = useBlogPosts();

    /**
     * Filters the search result by the blog filters provided.
     */
    const filteredByFiltersBlogs = useFilter(blogs, selectedFilters, (blog, filters) =>
        filters.reduce<boolean>((prev, curr) => (prev === false ? false : blog.topics.includes(curr)), true)
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
    }, [resetFilters]);

    const value: BlogFilterContextOptions = {
        results: filteredByFiltersBlogs,
        applicableFilters,
        selectedFilters,
        onFilterToggled: toggleFilter,
        onReset: handleReset,
    };

    return <BlogFilterContextProvider value={value}>{children}</BlogFilterContextProvider>;
};
