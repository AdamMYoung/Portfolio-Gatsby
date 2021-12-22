import { Box, BoxProps, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { useState, VFC } from 'react';
import { useDebounce } from 'react-use';

import { MotionBox, MotionText } from '~components/motion';

type ProgressProps = BoxProps & {
    amount: number;
};

const getPercentage = (amount: number) => {
    let percentage;

    if (amount < 0) {
        percentage = 0;
    } else if (amount > 100) {
        percentage = 100;
    } else {
        percentage = amount;
    }

    return percentage.toFixed(0);
};

export const Progress: VFC<ProgressProps> = ({ amount, 'aria-label': label, ...rest }) => {
    const [percentage, setPercentage] = useState(getPercentage(0));

    useDebounce(() => setPercentage(getPercentage(amount)), 10, [amount]);

    const bg = amount < 100 ? 'red.300' : 'green.300';

    return (
        <Box {...rest}>
            <Box h="full" w="full" position="relative">
                <MotionBox
                    rounded="xl"
                    position="absolute"
                    w={2}
                    top="0"
                    bottom="0"
                    left="0"
                    right="0"
                    bg="white"
                    opacity="0.1"
                />
                <MotionBox rounded="xl" position="absolute" w="2" animate={{ height: `${percentage}%` }} bg={bg} />
                <MotionBox
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-label={label}
                    position="absolute"
                    top="0"
                    right="-6"
                    w="10"
                    animate={{ top: `${percentage - 2}%` }}
                >
                    <MotionText bg={bg} rounded="xl" color="black" fontSize="xs" p="1" textAlign="center">
                        {percentage}%
                    </MotionText>
                </MotionBox>
            </Box>
        </Box>
    );
};
