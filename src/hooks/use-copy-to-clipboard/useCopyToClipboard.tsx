import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

export const useCopyToClipboard = (message = 'Content copied to clipboard') => {
    const toast = useToast();

    return useCallback(
        (content: string) => {
            navigator.clipboard.writeText(content);

            toast({ title: 'Copied!', description: message, status: 'success', duration: 3000 });
        },
        [message, toast]
    );
};
