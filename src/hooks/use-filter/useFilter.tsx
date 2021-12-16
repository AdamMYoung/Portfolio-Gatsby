import { useMemo } from 'react';

/**
 * Hook to filter a set of data based on a predicate and filter.
 * The data is only filtered when the filter parameter is defined.
 * @param data Data to filter.
 * @param filter Value used to filter.
 * @param predicate Predicate to filter data.
 * @returns The data filtered by the predicate.
 */
export const useFilter = <TFilter, TData>(
    data: TData[],
    filter: TFilter = undefined,
    predicate: (data: TData, filter: TFilter) => boolean
): TData[] => {
    return useMemo(() => {
        if (!filter || (Array.isArray(filter) && filter.length === 0)) {
            return data;
        }

        return data.filter((entry) => predicate(entry, filter));
    }, [filter, data, predicate]);
};
