import React, { FC, MouseEventHandler, useCallback } from 'react';
import { Button, ButtonProps, useToast } from '@chakra-ui/react';

type CopyButtonProps = ButtonProps & {
    contentToCopy: string;
};

export const CopyButton: FC<CopyButtonProps> = ({ contentToCopy, onClick, ...rest }) => {
    const toast = useToast();

    const copyContentToClipboard = useCallback(() => {
        navigator.clipboard.writeText(contentToCopy);

        toast({ title: 'Copied!', description: 'Content copied to clipboard', status: 'success', duration: 3000 });
    }, [contentToCopy]);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        copyContentToClipboard();
        onClick?.(e);
    };

    return <Button onClick={handleClick} fontSize="12" lineHeight="1" py="2" h="auto" {...rest} />;
};
