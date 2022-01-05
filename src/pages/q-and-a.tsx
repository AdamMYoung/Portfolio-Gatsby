import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import React, { useState, VFC } from 'react';
import { useForm } from 'react-hook-form';

import { TwoPanel, TwoPanelBlock, TwoPanelHeading, TwoPanelSubtitle, TwoPanelTitle } from '~components';
import { getItemMotion } from '~components/motion';
import { Layout, SEO } from '~views';

const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const QAndAIntro = () => {
    const [isSubmitting, setSubmitting] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setSubmitting(true);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'q-and-a',
                ...data,
            }),
        }).then(() => {
            setSubmitted(true);
            setSubmitting(false);
        });
    };

    return (
        <TwoPanel>
            <TwoPanelBlock variants={getItemMotion()}>
                <TwoPanelHeading>
                    <TwoPanelTitle as="h1">Ask me a question.</TwoPanelTitle>
                    <TwoPanelSubtitle>Check out some previous questions below.</TwoPanelSubtitle>
                </TwoPanelHeading>
            </TwoPanelBlock>

            <TwoPanelBlock variants={getItemMotion()}>
                {!isSubmitted ? (
                    <Stack
                        as="form"
                        spacing="4"
                        onSubmit={handleSubmit(onSubmit)}
                        netlify-honeypot="bot-field"
                        data-netlify="true"
                        name="q-and-a"
                    >
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="q-and-a" />

                        <FormControl id="name" isInvalid={errors.name}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                borderRadius="full"
                                placeholder="Jane Doe"
                                {...register('name', { required: true })}
                            />
                            <FormErrorMessage>Name is required.</FormErrorMessage>
                        </FormControl>
                        <FormControl id="emailAddress" isInvalid={errors.emailAddress}>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                borderRadius="full"
                                placeholder="janedoe@example.com"
                                {...register('emailAddress', { required: true, pattern: EMAIL_REGEX })}
                            />
                            <FormErrorMessage>Email address is required.</FormErrorMessage>
                        </FormControl>
                        <FormControl id="question" isInvalid={errors.question}>
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
                                {...register('question', { required: true, minLength: 30 })}
                            />
                            <FormErrorMessage>Please leave a question at least 30 characters long.</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" variant="outline" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Stack>
                ) : (
                    <Heading as="p">Thanks for your question!</Heading>
                )}
            </TwoPanelBlock>
        </TwoPanel>
    );
};

const QAndA: VFC = () => {
    return (
        <Stack spacing={[16, null, 24]}>
            <SEO
                title="Q&A"
                description="Ask a question, get a response. Have a look through questions asked by others too."
                canonical="/q-and-a/"
            />
            <QAndAIntro />
        </Stack>
    );
};

export default QAndA;
