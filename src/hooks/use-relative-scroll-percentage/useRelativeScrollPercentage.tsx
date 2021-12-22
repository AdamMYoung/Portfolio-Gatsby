import { MutableRefObject, useMemo } from 'react';
import { useWindowScroll } from 'react-use';

import { useDistanceFromTop } from '..';

export const useScrollPercentage = (
    offset = 0
): [MutableRefObject<HTMLElement>, MutableRefObject<HTMLElement>, { percentage: number }] => {
    const [fromRef, { distance: fromDistance }] = useDistanceFromTop();
    const [toRef, { distance: toDistance }] = useDistanceFromTop();
    const { y } = useWindowScroll();

    const current = y - fromDistance + offset;
    const end = toDistance - fromDistance;

    const percentage = useMemo(() => {
        return (current / end) * 100;
    }, [current, end, y]);

    return [fromRef, toRef, { percentage: percentage }];
};
