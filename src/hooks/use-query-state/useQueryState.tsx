import { useReducer } from 'react';

const reducer = (_, action: 'loading' | 'loaded' | 'error') => {
    switch (action) {
        case 'loading':
            return { querying: true, success: false, error: false };
        case 'loaded':
            return { querying: false, success: true, error: false };
        case 'error':
            return { querying: false, success: false, error: true };
    }
};

export const useQueryState = () => {
    const [state, dispatch] = useReducer(reducer, { querying: false, success: false, error: false });

    const setLoading = () => dispatch('loading');
    const setLoaded = () => dispatch('loaded');
    const setError = () => dispatch('error');

    const wrapQuery = async <T extends any>(fn: () => Promise<T>) => {
        setLoading();

        try {
            const result = await fn();
            setLoaded();
            return result;
        } catch (error) {
            setError();
            throw error;
        }
    };

    return { state, setLoading, setLoaded, setError, wrapQuery };
};
