import { useEffect, useState } from 'react';

/**
 * Hook to limit the number of entries in an array, and split them into batches.
 * @param entries Set of entries to limit.
 * @param batchSize Size of the entries to return.
 * @returns The limited set of entries.
 */
export const useArrayLimiter = <T extends any>(entries: T[], batchSize = 6): [T[], boolean, () => void, () => void] => {
    const [visibleCount, setVisibleCount] = useState(batchSize);

    const visibleEntries = entries.slice(0, visibleCount);
    const isAllVisible = visibleCount >= entries.length;

    const viewMore = () => setVisibleCount((count) => count + batchSize);
    const reset = () => setVisibleCount(batchSize);

    useEffect(() => setVisibleCount(batchSize), [entries]);

    return [visibleEntries, isAllVisible, viewMore, reset];
};
