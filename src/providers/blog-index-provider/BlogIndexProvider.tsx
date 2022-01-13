import { createContext } from '@chakra-ui/react-utils';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FC, useEffect, useState } from 'react';

type BlogIndexContextProps = {
    index: string;
    store: any;
    isIndexLoaded: boolean;
};

const [_, useBlogIndex, BlogIndexContext] = createContext<BlogIndexContextProps>();

export { useBlogIndex };

const getIndexes = () => {
    const data = useStaticQuery(graphql`
        {
            localSearchBlogPosts {
                publicIndexURL
                publicStoreURL
            }
        }
    `);

    return data?.localSearchBlogPosts ?? {};
};

const useSearchData = (): BlogIndexContextProps => {
    const [index, setIndex] = useState<string>();
    const [store, setStore] = useState<string | Object>();

    const { publicIndexURL, publicStoreURL } = getIndexes();

    useEffect(() => {
        const getData = async () => {
            const index = await fetch(publicIndexURL).then((res) => res.text());
            const store = await fetch(publicStoreURL).then((res) => res.json());

            console.log(index, store);

            setIndex(index);
            setStore(store);
        };

        getData();
    }, []);

    return { index, store, isIndexLoaded: !!index && !!store };
};

export const BlogIndexProvider: FC = ({ children }) => {
    const { index, store, isIndexLoaded } = useSearchData();

    return <BlogIndexContext.Provider value={{ index, store, isIndexLoaded }}>{children}</BlogIndexContext.Provider>;
};
