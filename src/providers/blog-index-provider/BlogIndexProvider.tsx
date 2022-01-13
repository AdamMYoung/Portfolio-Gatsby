import { createContext } from '@chakra-ui/react-utils';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FC, useEffect, useState } from 'react';

type BlogIndexContextProps = {
    index: string;
    store: any;
};

const [_, useBlogIndex, BlogIndexContext] = createContext<BlogIndexContextProps>();

export { useBlogIndex };

const useSearchData = (): BlogIndexContextProps => {
    const [index, setIndex] = useState<string>();
    const [store, setStore] = useState();

    const data = useStaticQuery(graphql`
        {
            localSearchBlogPosts {
                publicIndexURL
                publicStoreURL
            }
        }
    `);

    useEffect(() => {
        const getData = async () => {
            const index = await fetch(data.localSearchBlogPosts.publicIndexURL).then((res) => res.json());
            const store = await fetch(data.localSearchBlogPosts.publicStoreURL).then((res) => res.json());

            setIndex(index);
            setStore(store);
        };

        getData();
    }, []);

    return { index, store };
};

export const BlogIndexProvider: FC = ({ children }) => {
    const { index, store } = useSearchData();

    return <BlogIndexContext.Provider value={{ index, store }}>{children}</BlogIndexContext.Provider>;
};
