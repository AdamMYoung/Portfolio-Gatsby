import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React, { VFC } from 'react';
import { Hero, HeroBlock, HeroSubtitle, HeroTitle } from '../components/sections/hero';
import { Layout } from '../views';

const HeroIntro = () => {
    return (
        <Hero>
            <HeroBlock>
                <Stack>
                    <HeroTitle>Ask me a question.</HeroTitle>
                    <HeroSubtitle>Check out some previous questions below.</HeroSubtitle>
                </Stack>
            </HeroBlock>

            <HeroBlock>
                <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input borderRadius="full" placeholder="Jane Doe" />
                </FormControl>
                <FormControl id="emailAddress">
                    <FormLabel>Email Address</FormLabel>
                    <Input borderRadius="full" placeholder="janedoe@example.com" />
                </FormControl>
                <FormControl id="question">
                    <FormLabel>Your Question</FormLabel>
                    <Input
                        as="textarea"
                        borderRadius="3xl"
                        minH="100px"
                        py="3"
                        sx={{
                            '&::-webkit-scrollbar': { width: 0 },
                            overflow: '-moz-scrollbars-none',
                            '-ms-overflow-style': 'none',
                        }}
                    />
                </FormControl>
                <Button variant="outline">Submit</Button>
            </HeroBlock>
        </Hero>
    );
};

const QAndA: VFC = () => {
    return (
        <Layout>
            <HeroIntro />
        </Layout>
    );
};

export default QAndA;
