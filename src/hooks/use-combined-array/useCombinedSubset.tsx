import { useMemo } from 'react';

/**
 * Hook to combine a set of arrays into a single array, then return a limited number of those arrays.
 * @param limit Number of entries to limit.
 * @param arrays Arrays to combine.
 * @returns Limited set to combine
 */
export const useCombinedSubset = <T extends any>(limit: number, arrays: T[][]): T[] => {
    return useMemo(() => {
        const limitedSet: T[] = [];

        arrays.forEach((arr) => {
            const numOfEntriesNeeded = limit - limitedSet.length;

            if (numOfEntriesNeeded === 0) {
                return;
            }

            limitedSet.push(...arr.slice(0, numOfEntriesNeeded));
        });

        return limitedSet;
    }, [limit, arrays]);
};
