import { Heading, List, ListItem, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { VFC } from 'react';

import { SEO } from '~views/seo';

const Cookies: VFC = () => {
    return (
        <Stack spacing={[16, null, 24]}>
            <SEO
                title="Home"
                description="Hi, I'm Adam Young, a Software Engineer from Birmingham currently working at Curve. Here, you'll find articles about software development, my interests, and the projects I've currently got on the go."
                canonical="/"
            />
            <Stack spacing="8">
                <Stack>
                    <Heading>Disabling Cookies</Heading>
                    <Text>
                        Cookies can be disabled by declining the cookie popup displayed when the site is first visited.
                        To remove a previously accepted cookie, a hard reload of the page would be required.
                    </Text>
                </Stack>
                <Stack>
                    <Heading>What Cookies Are Used?</Heading>
                    <List>
                        <ListItem>
                            <b>Google Analytics</b> - Google Analytics is used to understand popular content, view
                            traffic to the site, and understand and where how the content is consumed.
                        </ListItem>
                        <ListItem>
                            <b>Hotjar</b> - Hotjar is used to view the post popular areas of pages, and to understand
                            where users drop off when viewing content within the site. This is used to improve content
                            moving forwards.
                        </ListItem>
                    </List>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Cookies;
