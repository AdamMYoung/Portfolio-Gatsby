import { MutableRefObject, useMemo } from 'react';
import { useWindowScroll } from 'react-use';
import { useDistanceFromTop } from '..';

type UseRelativeScrollPercentageResult<TStartElement, TEndElement> = [
    MutableRefObject<TStartElement>,
    MutableRefObject<TEndElement>,
    { percentage: number }
];

export const useRelativeScrollPercentage = <
    TStartElement extends HTMLElement = HTMLElement,
    TEndElement extends HTMLElement = HTMLElement
>(
    offset = 0
): UseRelativeScrollPercentageResult<TStartElement, TEndElement> => {
    const [fromRef, { distance: fromDistance }] = useDistanceFromTop<TStartElement>();
    const [toRef, { distance: toDistance }] = useDistanceFromTop<TEndElement>();
    const { y } = useWindowScroll();

    const current = y - fromDistance + offset;
    const end = toDistance - fromDistance;

    const percentage = useMemo(() => {
        return (current / end) * 100;
    }, [current, end, y]);

    return [fromRef, toRef, { percentage }];
};
