import { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';

/**
 * Hook to fire an event when a specific URL parameter is matched against.
 * @param key Query parameter key to use.
 * @param onMatched Event fired when the query parameter is matched.
 */
export const useParamsEvent = (key: string, onMatched: (matched: string[]) => void): void => {
    const location = useLocation();
    const [hasMatched, setHasMatched] = useState(false);

    useEffect(() => {
        const matched = location.search;
        const params = new URLSearchParams(matched);

        if (params.has(key) && !hasMatched) {
            setHasMatched(true);

            const matchedParam = params.get(key);
            if (matchedParam.includes(',')) {
                onMatched(matchedParam.split(','));
            }

            onMatched([matchedParam]);
        }
    }, [location, key, onMatched]);
};
