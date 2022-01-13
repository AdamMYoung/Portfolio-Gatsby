import { Container, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { CategoryList, CategoryListItem } from '~components/category-list';
import { LinkButton } from '~components/link-button';
import { SEO } from '~views/seo';

const Links = () => {
    return (
        <Container mt="12" maxW="container.xl">
            <SEO
                title="Links"
                description="A collection of social platforms, websites and email links relevant to me."
                canonical="/links/"
            />
            <Stack>
                <Heading fontWeight="semibold">My Links</Heading>
                <CategoryList w="full" gap="2" flexWrap="wrap">
                    <CategoryListItem as={LinkButton} href="/">
                        Website
                    </CategoryListItem>
                    <CategoryListItem
                        as={LinkButton}
                        href="https://drive.google.com/file/d/1Ws1_C6_3ryHWTol3ZSRxq3vFrrag5WfT/view?usp=sharing"
                    >
                        Resumé
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="https://github.com/adammyoung">
                        GitHub
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="https://twitter.com/AdamMYoung_">
                        Twitter
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="mailto:adam@aydev.uk">
                        Email
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="/blog">
                        Blog
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="/uses">
                        Uses
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="/rss.xml">
                        RSS
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="https://www.instagram.com/adammyoungphotography/">
                        Photography Instagram
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="https://stackoverflow.com/users/5620846/adam-young">
                        Stack Overflow
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="https://www.linkedin.com/in/adammichaelyoung/">
                        LinkedIn
                    </CategoryListItem>
                    <CategoryListItem as={LinkButton} href="https://unsplash.com/@adammyoung">
                        Unsplash
                    </CategoryListItem>
                </CategoryList>
            </Stack>
        </Container>
    );
};

export default Links;
