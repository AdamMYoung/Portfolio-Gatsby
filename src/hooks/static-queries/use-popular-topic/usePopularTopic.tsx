import { useMemo } from 'react';
import { useBlogTopics } from '~hooks/static-queries';

/**
 * Static query hook to return my most popular blog topic from the CMS.
 */
export const usePopularTopic = () => {
    const topics = useBlogTopics('array');

    return useMemo(() => {
        const entries = {};

        topics.forEach((t) => {
            if (entries[t]) {
                entries[t]++;
            } else {
                entries[t] = 1;
            }
        });

        return Object.keys(entries).reduce((a, b) => (entries[a] > entries[b] ? a : b));
    }, [topics]);
};
