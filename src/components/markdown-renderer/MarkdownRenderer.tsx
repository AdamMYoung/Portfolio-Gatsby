import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import React, { useEffect, useRef, VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Text, Box, Code, Heading, ListItem, Stack } from '@chakra-ui/react';
import hljs from 'highlight.js/lib/common';
import hljsDefineGraphQL from 'highlightjs-graphql';
import { paramCase } from 'param-case';

import 'highlight.js/styles/github-dark.css';

import { Link } from '~components';
import { CopyButton } from '~components/copy-button/CopyButton';
import { getTextFromMarkdownNode } from '~utils/markdown';

hljsDefineGraphQL(hljs);
hljs.configure({
    ignoreUnescapedHTML: true,
});

type MarkdownRendererProps = {
    markdown: string;
};

const newTheme = {
    a: ({ href, children }) => <Link href={href}>{children}</Link>,
    p: ({ children }) => <Text fontSize={['19', null, 'md']}>{children}</Text>,
    h2: ({ children, node }) => {
        const id = paramCase(getTextFromMarkdownNode(node));

        return (
            <Heading as={Link} pt="8" size="lg" id={id} href={`#${id}`}>
                {children}
            </Heading>
        );
    },
    h3: ({ children }) => (
        <Heading as="h3" size="md">
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

export const MarkdownRenderer: VFC<MarkdownRendererProps> = ({ markdown }) => {
    return (
        <Stack spacing="6">
            <ReactMarkdown components={ChakraUIRenderer(newTheme)} children={markdown} skipHtml />
        </Stack>
    );
};
