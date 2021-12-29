import React, { MutableRefObject, useRef } from 'react';
import { useIfClient } from '~hooks';

export const useDistanceFromTop = <TElement extends HTMLElement = HTMLElement>(): [
    MutableRefObject<TElement>,
    { distance: number }
] => {
    const ref = useRef<TElement>();
    const distance = useIfClient(
        () => (ref.current?.getBoundingClientRect().top ?? 0) + (document?.documentElement.scrollTop ?? 0),
        0
    );

    return [ref, { distance }];
};
