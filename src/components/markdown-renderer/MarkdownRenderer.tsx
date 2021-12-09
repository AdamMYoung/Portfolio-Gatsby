import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import React, { VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';
import { Text, Box, Code, Heading, Button } from '@chakra-ui/react';

import { Link } from '~components';
import { CopyButton } from '~components/copy-button/CopyButton';

type MarkdownRendererProps = {
    markdown: string;
};

const newTheme = {
    p: (props) => <Text fontSize="md" {...props} />,
    h1: (props) => <Heading as="h1" pt="8" {...props} />,
    h2: (props) => <Heading as="h2" pt="8" {...props} />,
    h3: (props) => <Heading as="h3" pt="8" {...props} />,
    h4: (props) => <Heading as="h4" pt="8" {...props} />,
    h5: (props) => <Heading as="h5" pt="8" {...props} />,
    h6: (props) => <Heading as="h6" pt="8" {...props} />,
    a: (props) => <Link {...props} />,
    code: ({ children }) => (
        <Code p="1" wordBreak="break-word">
            {children}
        </Code>
    ),
    pre: ({ node, children }) => {
        //Odd prop drilling, since the code component is used for both single line code and pre.
        const content = node.children[0].children[0].value;

        return (
            <Box
                as="pre"
                position="relative"
                bg="gray.700"
                boxShadow="xl"
                rounded="xl"
                pr="4"
                sx={{ code: { w: 'full', color: 'white', bg: 'initial' } }}
            >
                <CopyButton contentToCopy={content} position="absolute" top="4" right="4">
                    Copy
                </CopyButton>
                <Highlight>{children}</Highlight>
            </Box>
        );
    },
};

export const MarkdownRenderer: VFC<MarkdownRendererProps> = ({ markdown }) => {
    return <ReactMarkdown components={ChakraUIRenderer(newTheme)} children={markdown} skipHtml />;
};
