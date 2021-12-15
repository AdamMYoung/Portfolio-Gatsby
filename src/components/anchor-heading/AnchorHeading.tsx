import { LinkIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, useToast } from '@chakra-ui/react';
import React, { FC } from 'react';

import { useMergedStyles, useIsMobile } from '~hooks';

export const AnchorHeading: FC<ButtonProps> = ({ children, sx, id, onClick, ...rest }) => {
    const isMobile = useIsMobile();
    const toast = useToast();

    const _sx = useMergedStyles(sx, {
        position: 'relative',
        color: 'red.400',
        px: 0,
        cursor: 'pointer',
        textDecoration: 'none',
        _hover: {
            '.copy-link-icon': {
                opacity: 1,
            },
        },
    });

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${id}`);

        toast({ title: 'Copied!', description: 'Link copied to clipboard', status: 'success', duration: 3000 });
        onClick?.(e);
    };

    return (
        <Button id={id} variant="link" sx={_sx} onClick={handleClick} {...rest}>
            {children}
            {!isMobile && (
                <LinkIcon
                    left="-10"
                    className="copy-link-icon"
                    position="absolute"
                    color="gray.500"
                    opacity="0"
                    transition="all 0.2s ease-in-out"
                />
            )}
        </Button>
    );
};
