import React, { MutableRefObject, useRef } from 'react';

export const useDistanceFromDocument = (): [MutableRefObject<HTMLElement>, { distance: number }] => {
    const ref = useRef<HTMLElement>();
    const distance = (ref.current?.getBoundingClientRect().top ?? 0) + (document?.documentElement.scrollTop ?? 0);

    return [ref, { distance }];
};
