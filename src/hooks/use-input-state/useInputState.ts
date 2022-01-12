import React, { useState } from 'react';

export const useInputState = (initialValue?: string): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
    const [state, setState] = useState<string>(initialValue);

    const handleSetState: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setState(e.target.value);
    };

    return [state, handleSetState];
};
