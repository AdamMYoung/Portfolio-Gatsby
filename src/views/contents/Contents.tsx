import { Divider, Heading, List, ListItem, Stack } from '@chakra-ui/react';
import React, { useRef, VFC } from 'react';

import { Link } from '~components';
import { ContentsEntry, useContents } from '~providers';

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

/**
 * Builds a list of JSX contents elements, this is in a function to store
 * heading numbers without needing to use refs.
 */
const buildContents = (entries: ContentsEntry[]) => {
    let heading = 0;
    let prevElement = 'h1';

    return entries.map((e) => {
        const previousNumber = getHeadingNumber(prevElement);
        const currentNumber = getHeadingNumber(e.heading);

        const isSubheading = e.heading !== 'h2';
        const shouldAddSpacing = currentNumber < previousNumber;

        prevElement = e.heading;

        //Only increment the heading number if the heading isn't a subheading.
        if (!isSubheading) heading += 1;

        return (
            <ListItem
                key={e.title}
                as={Link}
                sx={{ display: 'block', ml: listItemIndentMap[e.heading], mt: shouldAddSpacing ? 3 : 0 }}
                href={`#${e.anchor}`}
            >
                {!isSubheading && `${heading}.`} {e.title}
            </ListItem>
        );
    });
};

export const Contents: VFC = () => {
    const { entries } = useContents();

    if (entries.length === 0) return null;

    return (
        <List as="ol" fontSize="md">
            {buildContents(entries)}
        </List>
    );
};
