import { useMemo } from 'react';
import { useBlogTopics } from '~hooks/static-queries';

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
