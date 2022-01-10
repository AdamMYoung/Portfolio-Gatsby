import { LinkIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, useBreakpointValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useLocation } from '@reach/router';

import { useMergedStyles, useCopyToClipboard } from '~hooks';

export const AnchorHeading: FC<ButtonProps> = ({ children, sx, id, onClick, ...rest }) => {
    const handleCopy = useCopyToClipboard('Link copied to clipboard');
    const isMobile = useBreakpointValue([true, null, false]);
    const location = useLocation();

    const _sx = useMergedStyles(sx, {
        position: 'relative',
        color: 'red.400',
        px: 0,
        cursor: 'pointer',
        textDecoration: 'none',
        _hover: {
            '.copy-link-icon': {
                opacity: 0.7,
            },
        },
        _active: {
            '.copy-link-icon': {
                opacity: 1,
            },
        },
    });

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        handleCopy(`${location.origin}${location.pathname}#${id}`);
        onClick?.(e);
    };

    return (
        <Button id={id} variant="link" sx={_sx} onClick={handleClick} {...rest}>
            {children}
            {!isMobile && (
                <LinkIcon
                    right="-10"
                    className="copy-link-icon"
                    position="absolute"
                    color="gray.500"
                    opacity="0"
                    size="sm"
                    transition="all 0.2s ease-in-out"
                />
            )}
        </Button>
    );
};
