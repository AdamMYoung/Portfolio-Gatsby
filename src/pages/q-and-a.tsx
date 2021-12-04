import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import React, { VFC } from 'react';
import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelHeading,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '../components/sections/two-panel';
import { Layout } from '../views';

const HeroIntro = () => {
    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle>Ask me a question.</TwoPanelTitle>
                    <TwoPanelSubtitle>Check out some previous questions below.</TwoPanelSubtitle>
                </TwoPanelHeading>
            </TwoPanelBlock>

            <TwoPanelBlock>
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
            </TwoPanelBlock>
        </TwoPanel>
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
