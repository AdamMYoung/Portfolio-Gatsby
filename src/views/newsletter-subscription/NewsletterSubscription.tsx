import { Stack, Heading, Flex, Text, Input, Button } from '@chakra-ui/react';
import React, { useState, VFC } from 'react';
import { useNewsletterSubscription } from '~hooks/use-newsletter-subscription';
import { isEmail } from '~utils/validation';

export const NewsletterSubscription: VFC = () => {
    const [email, setEmail] = useState('');
    const { state, subscribe } = useNewsletterSubscription();

    const handleSubscribe: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (email && isEmail(email)) {
            subscribe(email);
        }
    };

    return (
        <Stack spacing="4" maxW={['auto', null, '50%']}>
            <Heading fontSize="5xl">Stay up to date</Heading>
            <Text>
                Get the latest articles on web development, technology and best practices, straight to your inbox.
            </Text>
            <Flex gap="4">
                <Input
                    isDisabled={state.success}
                    rounded="full"
                    placeholder="jane.doe@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button isLoading={state.querying} isDisabled={state.success} onClick={handleSubscribe} px="12">
                    {state.success ? 'Subscribed!' : 'Subscribe'}
                </Button>
            </Flex>
        </Stack>
    );
};
