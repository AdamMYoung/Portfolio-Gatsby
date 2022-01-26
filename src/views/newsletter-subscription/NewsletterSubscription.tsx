import { Stack, Heading, Flex, Text, Input, Button } from '@chakra-ui/react';
import React, { useState, VFC } from 'react';
import { useInputState } from '~hooks/use-input-state';
import { useNewsletterSubscription } from '~hooks/use-newsletter-subscription';
import { isEmail } from '~utils/validation';

export const NewsletterSubscription: VFC = () => {
    const [email, setEmail] = useInputState();
    const { state, subscribe } = useNewsletterSubscription();

    const handleSubscribe: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (email && isEmail(email) && !state.success) {
            subscribe(email);
        }
    };

    return (
        <Stack spacing="4" maxW={['auto', null, '70%', '50%']}>
            <Heading fontSize="5xl">Stay up to date</Heading>
            <Text>
                Get the latest articles on web development, technology and best practices, straight to your inbox.
            </Text>
            {!!state.success ? <Text fontSize="xl">You are subscribed!</Text> :
                <Stack spacing="4" direction={['column', null, 'row']}>
                    <Input
                        rounded="full"
                        placeholder="jane.doe@example.com"
                        onChange={setEmail}
                    />
                    <Button isLoading={state.querying} onClick={handleSubscribe} px="12">
                        Subscribe
                    </Button>
                </Stack>}
        </Stack>
    );
};
