import React, { FC, VFC } from 'react';
import { IconButton, IconButtonProps } from '@chakra-ui/button';

export const MenuIconButton: VFC<IconButtonProps> = ({ ...rest }) => {
    return <IconButton variant="outline" boxSize="64px" size="lg" {...rest} />;
};
