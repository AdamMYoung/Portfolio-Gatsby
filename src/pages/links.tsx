import { Container, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

import { LinkButton } from '~components';
import { Layout, SEO } from '~views';

const Links = () => {
    return (
        <Container mt="12" maxW="container.xl">
            <SEO
                title="Links"
                description="A collection of social platforms, websites and email links relevant to me."
                canonical="/links"
            />
            <Stack>
                <Heading fontWeight="semibold">My Links</Heading>
                <Flex w="full" sx={{ '*': { mt: 4, mr: 4 } }} flexWrap="wrap">
                    <LinkButton href="/">Website</LinkButton>
                    <LinkButton href="https://drive.google.com/file/d/1Ws1_C6_3ryHWTol3ZSRxq3vFrrag5WfT/view?usp=sharing">
                        Resumé
                    </LinkButton>
                    <LinkButton href="https://github.com/adammyoung">GitHub</LinkButton>
                    <LinkButton href="https://twitter.com/AdamMYoung_">Twitter</LinkButton>
                    <LinkButton href="mailto:adam@aydev.uk">Email</LinkButton>
                    <LinkButton href="/blog">Blog</LinkButton>
                    <LinkButton href="/uses">Uses</LinkButton>
                    <LinkButton href="/rss.xml">RSS</LinkButton>
                    <LinkButton href="https://www.instagram.com/adammyoungphotography/">
                        Photography Instagram
                    </LinkButton>
                    <LinkButton href="https://stackoverflow.com/users/5620846/adam-young">Stack Overflow</LinkButton>
                    <LinkButton href="https://www.linkedin.com/in/adammichaelyoung/">LinkedIn</LinkButton>
                    <LinkButton href="https://unsplash.com/@adammyoung">Unsplash</LinkButton>
                </Flex>
            </Stack>
        </Container>
    );
};

export default Links;
