import { useMemo } from 'react';

export const useCombinedArray = <T extends any>(limit: number, arrays: T[][]): T[] => {
    return useMemo(() => {
        const limitedSet: T[] = [];

        arrays.forEach((arr) => {
            const numOfEntriesNeeded = limit - limitedSet.length;

            if (numOfEntriesNeeded === 0) {
                return;
            }

            console.log(arr);

            limitedSet.push(...arr.slice(0, numOfEntriesNeeded));
        });

        return limitedSet;
    }, [limit, arrays]);
};
