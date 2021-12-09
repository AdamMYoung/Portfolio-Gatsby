import { Button, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link, LinkProps } from '~components';

type LinkButtonProps = LinkProps & ButtonProps;

export const LinkButton: FC<LinkButtonProps> = ({ children, ...rest }) => {
    return (
        <Button as={Link} {...rest}>
            {children}
        </Button>
    );
};
