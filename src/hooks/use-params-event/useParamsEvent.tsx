import { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';

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
