import { useCallback, useState } from 'react';

export const useToggleSet = <T extends any>(initialValue?: T[]): [T[], (toggle: T) => void, () => void] => {
    const [internalState, setInternalState] = useState<T[]>(initialValue ?? []);

    const toggleValue = useCallback(
        (value: T) => {
            if (internalState.includes(value)) {
                setInternalState(internalState.filter((v) => v !== value));
            } else {
                setInternalState([...internalState, value]);
            }
        },
        [internalState, setInternalState]
    );

    const resetSet = useCallback(() => {
        setInternalState(initialValue ?? []);
    }, [setInternalState, initialValue]);

    return [internalState, toggleValue, resetSet];
};
