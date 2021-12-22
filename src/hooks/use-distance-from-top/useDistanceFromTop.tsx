import React, { MutableRefObject, useRef } from 'react';
import { useIfClient } from '~hooks';

export const useDistanceFromTop = (): [MutableRefObject<HTMLElement>, { distance: number }] => {
    const ref = useRef<HTMLElement>();
    const distance = useIfClient(
        () => (ref.current?.getBoundingClientRect().top ?? 0) + (document?.documentElement.scrollTop ?? 0),
        0
    );

    return [ref, { distance }];
};
