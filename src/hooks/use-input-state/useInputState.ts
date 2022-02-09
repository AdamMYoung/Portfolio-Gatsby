import React, { useState } from 'react';

/**
 * Hook to manage the change state of an input field, allowing the handle function to be passed
 * directly to onChange.
 * @param initialValue Initial value of the exposed state.
 */
export const useInputState = (initialValue?: string): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
    const [state, setState] = useState<string>(initialValue);

    const handleSetState: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setState(e.target.value);
    };

    return [state, handleSetState];
};
