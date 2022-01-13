import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC, MouseEventHandler } from 'react';
import { useCopyToClipboard } from '~hooks';

type CopyButtonProps = ButtonProps & {
    contentToCopy: string;
};

export const CopyButton: FC<CopyButtonProps> = ({ contentToCopy, onClick, ...rest }) => {
    const handleCopy = useCopyToClipboard();

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        handleCopy(contentToCopy);
        onClick?.(e);
    };

    return <Button onClick={handleClick} fontSize="12" lineHeight="1" py="2" h="auto" {...rest} />;
};
