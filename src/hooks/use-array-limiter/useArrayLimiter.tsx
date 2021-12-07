import { useEffect, useState } from 'react';

export const useArrayLimiter = <T extends any>(entries: T[], batchSize = 6): [T[], boolean, () => void, () => void] => {
    const [visibleCount, setVisibleCount] = useState(batchSize);

    const visibleEntries = entries.slice(0, visibleCount);
    const isAllVisible = visibleCount >= entries.length;

    const viewMore = () => setVisibleCount((count) => count + batchSize);

    const reset = () => setVisibleCount(batchSize);

    useEffect(() => {
        setVisibleCount(batchSize);
    }, [entries]);

    return [visibleEntries, isAllVisible, viewMore, reset];
};
