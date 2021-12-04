import { Button, ButtonProps, LinkProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link } from '..';

type LinkButtonProps = LinkProps & ButtonProps;

export const LinkButton: FC<LinkButtonProps> = ({ children, ...rest }) => {
    return (
        <Button as={Link} {...rest}>
            {children}
        </Button>
    );
};
