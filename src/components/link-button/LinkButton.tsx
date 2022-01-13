import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC, forwardRef } from 'react';
import { Link, LinkProps } from '~components/link';

export type LinkButtonProps = LinkProps & ButtonProps;

export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(({ children, ...rest }, ref) => {
    return (
        <Button ref={ref} as={Link} {...rest}>
            {children}
        </Button>
    );
});
