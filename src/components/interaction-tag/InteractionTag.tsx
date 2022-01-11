import { Tag, TagProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { LinkButton, LinkButtonProps } from '..';

type InteractionTagProps = TagProps & LinkButtonProps;

export const InteractionTag: FC<InteractionTagProps> = ({ children, ...rest }) => {
    return (
        <Tag as={LinkButton} size="lg" py="0" _hover={{ bg: 'red.600' }} {...rest}>
            {children}
        </Tag>
    );
};
