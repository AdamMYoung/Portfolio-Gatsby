import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import React, { useEffect, useRef, VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Text, Box, Code, Heading, ListItem } from '@chakra-ui/react';
import hljs from 'highlight.js/lib/common';
import hljsDefineGraphQL from 'highlightjs-graphql';

import 'highlight.js/styles/github-dark.css';

import { Link } from '~components';
import { CopyButton } from '~components/copy-button/CopyButton';

hljsDefineGraphQL(hljs);
hljs.configure({
    ignoreUnescapedHTML: true,
});

type MarkdownRendererProps = {
    markdown: string;
};

const newTheme = {
    p: ({ children }) => <Text fontSize="md">{children}</Text>,
    li: ({ children }) => <ListItem fontSize="md">{children}</ListItem>,
    h1: ({ children }) => (
        <Heading as="h1" fontSize={['2xl', null, '3xl']} pt="6">
            {children}
        </Heading>
    ),
    h2: ({ children }) => (
        <Heading as="h2" fontSize={['xl', null, '2xl']} pt="6">
            {children}
        </Heading>
    ),
    h3: ({ children }) => (
        <Heading as="h3" fontSize={['xl', null, '2xl']} pt="6">
            {children}
        </Heading>
    ),
    h4: ({ children }) => (
        <Heading as="h4" fontSize={['lg', null, 'xl']} pt="6">
            {children}
        </Heading>
    ),
    h5: ({ children }) => (
        <Heading as="h5" fontSize={['md', null, 'lg']} pt="6">
            {children}
        </Heading>
    ),
    h6: ({ children }) => (
        <Heading as="h6" fontSize={['md', null, 'lg']} pt="6">
            {children}
        </Heading>
    ),
    a: ({ href, children }) => <Link href={href}>{children}</Link>,
    code: ({ children }) => (
        <Code p="1" wordBreak="break-word">
            {children}
        </Code>
    ),
    pre: ({ node, children }) => {
        const preRef = useRef();
        //Odd prop drilling, since the code component is used for both single line code and pre,
        //and we only need it for pre.
        const { properties, children: code } = node.children[0];

        const content = code[0].value;
        const match = /language-(\w+)/.exec(properties.className || '');

        useEffect(() => {
            hljs.highlightElement(preRef.current);
        }, []);

        return (
            <Box p="4" position="relative" bg="gray.700" boxShadow="xl" rounded="xl">
                <CopyButton contentToCopy={content} position="absolute" top="4" right="4">
                    Copy
                </CopyButton>
                <Box
                    ref={preRef}
                    className={`${match[1]}`}
                    as="pre"
                    sx={{
                        bg: 'initial !important',
                        overflow: 'none',
                        overflowX: 'auto',
                        code: { w: 'full', color: 'white', bg: 'initial' },
                    }}
                >
                    {children}
                </Box>
            </Box>
        );
    },
};

export const MarkdownRenderer: VFC<MarkdownRendererProps> = ({ markdown }) => {
    return <ReactMarkdown components={ChakraUIRenderer(newTheme)} children={markdown} skipHtml />;
};
