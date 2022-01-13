import { Box, BoxProps, Code, Heading, ListItem, Text } from '@chakra-ui/react';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/github-dark.css';
import hljsDefineGraphQL from 'highlightjs-graphql';
import { paramCase } from 'param-case';
import React, { useEffect, useRef, VFC } from 'react';
import ReactMarkdown from 'react-markdown';

import { AnchorHeading } from '~components/anchor-heading';
import { CopyButton } from '~components/copy-button';
import { Link } from '~components/link';
import { useContents } from '~providers';
import { getTextFromMarkdownNode, MarkdownNode } from '~utils/markdown';

hljsDefineGraphQL(hljs);
hljs.configure({
    ignoreUnescapedHTML: true,
});

type MarkdownRendererProps = BoxProps & {
    markdown: string;
};

/**
 * Hook to register the heading, and return the ID for anchor linking.
 * @param node Node to register.
 * @param heading Heading size of the node.
 * @returns
 */
const useRegisteredHeading = (node: MarkdownNode, heading: 'h2' | 'h3') => {
    const { register } = useContents();

    const title = getTextFromMarkdownNode(node);
    const id = paramCase(title);

    useEffect(() => register({ title, anchor: id, heading }), []);

    return id;
};

const newTheme = {
    a: ({ href, children }) => <Link href={href}>{children}</Link>,
    p: ({ children }) => (
        <Text mt="4" mb="8" fontSize="19">
            {children}
        </Text>
    ),
    em: ({ children }) => (
        <Text as="em" mx="2">
            {children}
        </Text>
    ),
    li: ({ children }) => (
        <ListItem lineHeight={1.3} fontSize="19">
            {children}
        </ListItem>
    ),
    h2: ({ children, node }) => {
        const id = useRegisteredHeading(node, 'h2');

        return (
            <AnchorHeading
                as="h2"
                mb="2"
                fontSize={['2xl', null, '3xl']}
                whiteSpace="normal"
                _notFirst={{ mt: 12 }}
                wordBreak="break-all"
                id={id}
            >
                {children}
            </AnchorHeading>
        );
    },
    h3: ({ children, node }) => {
        const id = useRegisteredHeading(node, 'h3');

        return (
            <Box>
                <AnchorHeading as="h3" mt="8" mb="2" fontSize="xl" whiteSpace="normal" wordBreak="break-all" id={id}>
                    {children}
                </AnchorHeading>
            </Box>
        );
    },
    h4: ({ children, node }) => {
        return (
            <Heading as="h4" mt="4" mb="6" fontSize="lg" whiteSpace="normal" wordBreak="break-all">
                {children}
            </Heading>
        );
    },
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
