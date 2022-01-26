import { useCallback, useState } from 'react';

/**
 * Hook to allow toggling of values within an array. Toggling once will add it to the state array, toggling again will remove it.
 * @param initialValue Initial value of the state array.
 */
export const useToggleSet = <T extends any>(initialValue?: T[]): [T[], (toggle: T) => void, () => void] => {
    const [internalState, setInternalState] = useState<T[]>(initialValue ?? []);

    const toggleValue = useCallback(
        (value: T) => {
            if (internalState.includes(value)) {
                setInternalState((state) => state.filter((v) => v !== value));
            } else {
                setInternalState((state) => [...state, value]);
            }
        },
        [internalState, setInternalState]
    );

    const resetSet = useCallback(() => {
        setInternalState(initialValue ?? []);
    }, [setInternalState, initialValue]);

    return [internalState, toggleValue, resetSet];
};
