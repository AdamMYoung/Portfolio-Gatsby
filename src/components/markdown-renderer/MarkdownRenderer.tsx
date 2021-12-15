import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import React, { useEffect, useRef, VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Text, Box, Code, Heading, ListItem, BoxProps } from '@chakra-ui/react';
import hljs from 'highlight.js/lib/common';
import hljsDefineGraphQL from 'highlightjs-graphql';
import { paramCase } from 'param-case';

import 'highlight.js/styles/github-dark.css';

import { AnchorHeading, Link } from '~components';
import { CopyButton } from '~components/copy-button/CopyButton';
import { getTextFromMarkdownNode } from '~utils/markdown';

hljsDefineGraphQL(hljs);
hljs.configure({
    ignoreUnescapedHTML: true,
});

type MarkdownRendererProps = BoxProps & {
    markdown: string;
};

const newTheme = {
    a: ({ href, children }) => <Link href={href}>{children}</Link>,
    p: ({ children }) => (
        <Text my="4" fontSize={['19', null, 'md']}>
            {children}
        </Text>
    ),
    li: ({ children }) => (
        <ListItem my="2" fontSize={['19', null, 'md']}>
            {children}
        </ListItem>
    ),
    h2: ({ children, node }) => {
        const id = paramCase(getTextFromMarkdownNode(node));

        return (
            <AnchorHeading as="h2" mt="12" fontSize={['xl', null, '2xl']} id={id}>
                {children}
            </AnchorHeading>
        );
    },
    h3: ({ children }) => (
        <Heading as="h3" my="4" size="md">
            {children}
        </Heading>
    ),
    code: ({ children }) => (
        <Code p="1" wordBreak="break-word">
            {children}
        </Code>
    ),
    pre: ({ node, children }) => {
        const preRef = useRef();
        //Odd prop drilling, since the code component is used for both single line code and pre,
        //and we only need it for pre.
        const { properties, children: code } = node?.children[0];

        const content = code[0]?.value;
        const match = /language-(\w+)/.exec(properties.className || '');

        useEffect(() => hljs.highlightElement(preRef.current), []);

        return (
            <Box p="4" position="relative" bg="gray.700" boxShadow="xl" rounded="xl">
                <CopyButton contentToCopy={content} position="absolute" top="4" right="4">
                    Copy
                </CopyButton>
                <Box
                    ref={preRef}
                    className={`${match?.[1]}`}
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

export const MarkdownRenderer: VFC<MarkdownRendererProps> = ({ markdown, ...rest }) => {
    return (
        <Box {...rest}>
            <ReactMarkdown components={ChakraUIRenderer(newTheme)} children={markdown} skipHtml />
        </Box>
    );
};
