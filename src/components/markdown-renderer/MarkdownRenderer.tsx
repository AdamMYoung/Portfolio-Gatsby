import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import React, { VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import Highlight from 'react-highlight';
import { Box, Code, Heading } from '@chakra-ui/react';

import { Link } from '~components';

type MarkdownRendererProps = {
    markdown: string;
};

const newTheme = {
    h1: (props) => <Heading as="h1" pt="8" {...props} />,
    h2: (props) => <Heading as="h2" pt="8" {...props} />,
    h3: (props) => <Heading as="h3" pt="8" {...props} />,
    h4: (props) => <Heading as="h4" pt="8" {...props} />,
    h5: (props) => <Heading as="h5" pt="8" {...props} />,
    h6: (props) => <Heading as="h6" pt="8" {...props} />,
    a: ({ href, children }) => <Link href={href}>{children}</Link>,
    code: ({ children }) => <Code p="1">{children}</Code>,
    pre: ({ children }) => {
        return (
            <Box
                as="pre"
                bg="gray.700"
                boxShadow="xl"
                rounded="xl"
                sx={{ code: { w: 'full', color: 'white', bg: 'initial' } }}
            >
                <Highlight>{children}</Highlight>
            </Box>
        );
    },
};

export const MarkdownRenderer: VFC<MarkdownRendererProps> = ({ markdown }) => {
    return <ReactMarkdown components={ChakraUIRenderer(newTheme)} children={markdown} skipHtml />;
};
