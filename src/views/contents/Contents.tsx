import { Divider, Heading, List, ListItem, Stack } from '@chakra-ui/react';
import React, { useMemo, useRef, VFC } from 'react';

import { Link } from '~components';
import { ContentsEntry, useContents } from '~providers';

const listItemIndentMap = {
    h2: 0,
    h3: 4,
};

/**
 * Builds a list of JSX contents elements, this is in a function to store
 * heading numbers without needing to use refs.
 */
const buildContents = (entries: ContentsEntry[]) => {
    let heading = 0;
    let subheading = 0;

    return entries.map((e) => {
        const isSubheading = e.heading === 'h3';

        if (isSubheading) {
            subheading += 1;
        } else {
            heading += 1;
            subheading = 0;
        }

        return (
            <ListItem as={Link} sx={{ display: 'block', ml: listItemIndentMap[e.heading] }} href={`#${e.anchor}`}>
                {isSubheading ? `${heading}.${subheading}.` : `${heading}.`} {e.title}
            </ListItem>
        );
    });
};

export const Contents: VFC = () => {
    const { entries } = useContents();
    const contentsEntries = useMemo(() => buildContents(entries ?? []), [entries]);

    if (entries.length === 0) return null;

    return (
        <List as="ol" fontSize="md">
            {contentsEntries}
        </List>
    );
};
