import { useMemo } from 'react';
import { useGithubStats } from '~hooks/static-queries';

/**
 * Static query hook to return a ranked list of languages I use from the Github API.
 */
export const usePopularLanguage = () => {
    const stats = useGithubStats();

    return useMemo(() => {
        const entries = {};

        stats.repositories.forEach((r) =>
            r.languages.forEach((l) => {
                if (entries[l]) {
                    entries[l]++;
                } else {
                    entries[l] = 1;
                }
            })
        );

        return Object.keys(entries).reduce((a, b) => (entries[a] > entries[b] ? a : b));
    }, [stats]);
};
