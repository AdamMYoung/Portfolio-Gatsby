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

type QueryStateOptions = {
    /**
     * Indicates if the `wrapQuery` function should throw any errors returned from the wrapped Promise. Defaults to `true`.
     */
    throwErrors?: boolean;
};

const defaultQueryStateOptions: Required<QueryStateOptions> = {
    throwErrors: true,
};

/**
 * Hook to provide loading statuses, errors, and a function to wrap a Promise for handling loading state.
 * Acts as a smaller state-management hook compared to React Query or SWR.
 */
export const useQueryState = () => {
    const [state, dispatch] = useReducer(reducer, { querying: false, success: false, error: false });

    const setLoading = () => dispatch('loading');
    const setLoaded = () => dispatch('loaded');
    const setError = () => dispatch('error');

    const wrapQuery = async <T extends any>(fn: () => Promise<T>, options = defaultQueryStateOptions) => {
        const { throwErrors } = options;

        setLoading();

        try {
            const result = await fn();
            setLoaded();
            return result;
        } catch (error) {
            setError();

            if (throwErrors) {
                throw error;
            }
        }
    };

    return { state, setLoading, setLoaded, setError, wrapQuery };
};
