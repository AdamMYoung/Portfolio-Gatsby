import { Stack, Heading, Flex, Text, Input, Button, FormControl, FormErrorMessage } from '@chakra-ui/react';
import React, { useState, VFC } from 'react';
import { useInputState } from '~hooks/use-input-state';
import { useNewsletterSubscription } from '~hooks/use-newsletter-subscription';
import { isEmail } from '~utils/validation';

export const NewsletterSubscription: VFC = () => {
    const [email, setEmail] = useInputState();
    const [isValidationError, setValidationError] = useState<boolean>();
    const { state, subscribe } = useNewsletterSubscription();

    const handleSubscribe: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (email && !state.success) {
            if (isEmail(email)) {
                setValidationError(false);
                subscribe(email);
            } else {
                setValidationError(true);
            }
        }
    };

    return (
        <Stack spacing="4" maxW={['auto', null, '70%', '50%']}>
            <Heading fontSize="5xl">Stay up to date</Heading>
            <Text>
                Get the latest articles on web development, technology and best practices, straight to your inbox.
            </Text>
            <Stack spacing="4" direction={['column', null, 'row']}>
                <FormControl isInvalid={isValidationError}>
                    <Input
                        isDisabled={state.success}
                        rounded="full"
                        placeholder="jane.doe@example.com"
                        onChange={setEmail}
                    />
                    <FormErrorMessage>Please enter a valid email address.</FormErrorMessage>
                </FormControl>
                <Button isLoading={state.querying} isDisabled={state.success} onClick={handleSubscribe} px="12">
                    {state.success ? 'Email Sent!' : 'Subscribe'}
                </Button>
            </Stack>
        </Stack>
    );
};
