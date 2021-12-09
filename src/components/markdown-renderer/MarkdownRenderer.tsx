import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import React, { useEffect, useRef, VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Text, Box, Code, Heading } from '@chakra-ui/react';
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
    h1: ({ children }) => (
        <Heading as="h1" pt="8">
            {children}
        </Heading>
    ),
    h2: ({ children }) => (
        <Heading as="h2" pt="8">
            {children}
        </Heading>
    ),
    h3: ({ children }) => (
        <Heading as="h3" pt="8">
            {children}
        </Heading>
    ),
    h4: ({ children }) => (
        <Heading as="h4" pt="8">
            {children}
        </Heading>
    ),
    h5: ({ children }) => (
        <Heading as="h5" pt="8">
            {children}
        </Heading>
    ),
    h6: ({ children }) => (
        <Heading as="h6" pt="8">
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
            <Box p="4" position="relative" bg="gray.700" boxShadow="xl" rounded="xl" >
                <CopyButton contentToCopy={content} position="absolute" top="4" right="4">
                    Copy
                </CopyButton>
                <Box
                    ref={preRef}
                    className={`${match[1]}`}
                    as="pre"
                    sx={{ bg: 'initial !important', overflow="none" overflowX="auto", code: { w: 'full', color: 'white', bg: 'initial' } }}
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
