import { useMemo } from 'react';

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
