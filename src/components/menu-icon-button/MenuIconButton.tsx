import { IconButton, IconButtonProps } from '@chakra-ui/react';
import React, { VFC } from 'react';

export const MenuIconButton: VFC<IconButtonProps> = ({ ...rest }) => {
    return <IconButton variant="outline" boxSize="64px" size="lg" {...rest} />;
};
