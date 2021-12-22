import { Box, BoxProps } from '@chakra-ui/react';
import React, { useState, VFC } from 'react';
import { useDebounce } from 'react-use';

import { MotionBox } from '~components/motion';
import { useIsMobile } from '~hooks/use-is-mobile';

type ProgressProps = BoxProps & {
    direction: 'row' | 'column';
    amount: number;
};

const directionVariants = (amount: number) => {
    let percentage;

    if (amount < 5) {
        percentage = 2;
    } else if (amount > 100) {
        percentage = 100;
    } else {
        percentage = amount;
    }

    return {
        row: { width: `${percentage}%` },
        column: { height: `${percentage}%` },
    };
};

export const Progress: VFC<ProgressProps> = ({ amount, direction, ...rest }) => {
    const [animation, setAnimation] = useState(directionVariants(0)[direction]);
    const isMobile = useIsMobile();
    useDebounce(() => setAnimation(directionVariants(amount)[direction]), isMobile ? 5 : 100, [amount, direction]);

    return (
        <Box h="full" w="full" position="relative" {...rest}>
            <MotionBox
                rounded="xl"
                position="absolute"
                w={[1, null, 2]}
                top="0"
                bottom="0"
                left="0"
                right="0"
                bg="white"
                opacity="0.1"
            />
            <MotionBox
                rounded="xl"
                position="absolute"
                w={[1, null, 2]}
                animate={animation}
                bg={amount < 100 ? 'red.300' : 'green.300'}
            />
        </Box>
    );
};
