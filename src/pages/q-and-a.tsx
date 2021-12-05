import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { VFC } from 'react';
import { useForm } from 'react-hook-form';
import {
    TwoPanel,
    TwoPanelBlock,
    TwoPanelHeading,
    TwoPanelSubtitle,
    TwoPanelTitle,
} from '../components/sections/two-panel';
import { Layout } from '../views';
import { SEO } from '../views/seo/SEO';

const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const HeroIntro = () => {
    const { register, handleSubmit } = useForm();

    return (
        <TwoPanel>
            <TwoPanelBlock>
                <TwoPanelHeading>
                    <TwoPanelTitle as="h1">Ask me a question.</TwoPanelTitle>
                    <TwoPanelSubtitle>Check out some previous questions below.</TwoPanelSubtitle>
                </TwoPanelHeading>
            </TwoPanelBlock>

            <TwoPanelBlock>
                <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="q-and-a">
                    <input type="hidden" name="bot-field" />
                    + <input type="hidden" name="form-name" value="contact" />
                    <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input borderRadius="full" placeholder="Jane Doe" {...register('name', { required: true })} />
                    </FormControl>
                    <FormControl id="emailAddress">
                        <FormLabel>Email Address</FormLabel>
                        <Input
                            borderRadius="full"
                            placeholder="janedoe@example.com"
                            {...register('emailAddress', { required: true, pattern: EMAIL_REGEX })}
                        />
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
                            {...register('question', { required: true })}
                        />
                    </FormControl>
                    <Button type="submit" variant="outline">
                        Submit
                    </Button>
                </form>
            </TwoPanelBlock>
        </TwoPanel>
    );
};

const QAndA: VFC = () => {
    return (
        <Layout>
            <SEO
                title="Q&A"
                description="Ask a question, get a response. Have a look through questions asked by others too."
            />
            <HeroIntro />
        </Layout>
    );
};

export default QAndA;
