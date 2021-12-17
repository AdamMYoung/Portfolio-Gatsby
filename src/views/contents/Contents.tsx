import { Heading, List, ListItem, Stack } from '@chakra-ui/react';
import React, { useRef, VFC } from 'react';

import { Link } from '~components';
import { useContents } from '~providers';

const listItemIndentMap = {
    h2: 0,
    h3: 4,
    h4: 8,
    h5: 12,
    h6: 16,
};

const getHeadingNumber = (heading: string) => {
    return parseInt(heading.charAt(1));
};

export const Contents: VFC = () => {
    const prevElement = useRef<string>('h1');
    const { entries } = useContents();

    if (entries.length === 0) return null;

    return (
        <Stack spacing="6">
            <Heading fontSize="4xl">Contents</Heading>
            <List fontSize="md">
                {entries.map((e) => {
                    const previousNumber = getHeadingNumber(prevElement.current);
                    const currentNumber = getHeadingNumber(e.heading);

                    const shouldAddSpacing = currentNumber < previousNumber;
                    prevElement.current = e.heading;

                    return (
                        <ListItem
                            key={e.anchor}
                            as={Link}
                            sx={{ display: 'block', ml: listItemIndentMap[e.heading], mt: shouldAddSpacing ? 3 : 0 }}
                            href={`#${e.anchor}`}
                        >
                            {e.title}
                        </ListItem>
                    );
                })}
            </List>
        </Stack>
    );
};
