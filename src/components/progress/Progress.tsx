import { Box, BoxProps } from '@chakra-ui/react';
import React, { useEffect, useRef, useState, VFC } from 'react';
import { useDebounce } from 'react-use';
import party from 'party-js';

import { MotionBox, MotionText } from '~components/motion';
import { limitNumberWithinRange } from '~utils/number';

type ProgressProps = BoxProps & {
    amount: number;
    useFinishEffect?: boolean;
};

export const Progress: VFC<ProgressProps> = ({ amount, useFinishEffect, 'aria-label': label, ...rest }) => {
    const indicatorRef = useRef<HTMLDivElement>();
    const [percentage, setPercentage] = useState(0);
    const [hasReachedEnd, setHasReachedEnd] = useState(false);

    useDebounce(() => setPercentage(limitNumberWithinRange(amount)), 10, [amount]);

    useEffect(() => {
        if (!hasReachedEnd && useFinishEffect && percentage === 100) {
            setHasReachedEnd(true);
            party.confetti(indicatorRef.current, { spread: 80, count: 60, size: 1.25 });
        }
    }, [percentage, useFinishEffect, hasReachedEnd, setHasReachedEnd]);

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
                    ref={indicatorRef}
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
