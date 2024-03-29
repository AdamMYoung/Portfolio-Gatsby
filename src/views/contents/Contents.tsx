import { List, ListItem } from '@chakra-ui/react';
import React, { useMemo, VFC } from 'react';
import { Link } from '~components/link';
import { ContentsEntry, useContents } from '~providers/contents-provider';

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
            <ListItem key={e.title} sx={{ display: 'block', ml: listItemIndentMap[e.heading] }}>
                <Link href={`#${e.anchor}`}>
                    {isSubheading ? `${heading}.${subheading}.` : `${heading}.`} {e.title}
                </Link>
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
