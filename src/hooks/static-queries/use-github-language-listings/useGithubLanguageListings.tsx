import { useMemo } from 'react';
import { useGithubStats } from '~hooks/static-queries';
import { isDateWithinRange } from '~utils/date';
import { limitNumberWithinRange } from '~utils/number';

type LanguageEntry = {
    weight: number;
    lastEdited: Date;
};

const weightEntries = (entries: Record<string, LanguageEntry>) => {
    // The base value of a weight. (100 being expert, 10 being novice)
    const baseWeight = 20;

    const sortedEntries = Object.keys(entries)
        .sort((a, b) => entries[b].weight - entries[a].weight)
        .map((e) => ({
            name: e,
            weight: entries[e].weight,
            lastEdited: entries[e].lastEdited,
        }));

    const totalWeight = sortedEntries.reduce((acc, e) => acc + e.weight, 0);

    const weightedEntries = sortedEntries.map((e) => {
        let weight = baseWeight + (e.weight / totalWeight) * 100;

        //If within the last month, bump the weight since there's recent experience.
        if (isDateWithinRange(e.lastEdited, 1, 'month')) {
            weight *= 2;
        }

        //If more than 6 months old, reduce the weight since there's no recent experience.
        if (!isDateWithinRange(e.lastEdited, 6, 'month')) {
            weight *= 0.5;
        }

        //If more than 1 year old, further reduce the weight.
        if (!isDateWithinRange(e.lastEdited, 1, 'year')) {
            weight *= 0.5;
        }

        //If more than 2 years old, further reduce the weight.
        if (!isDateWithinRange(e.lastEdited, 2, 'year')) {
            weight *= 0.5;
        }

        return {
            weight: limitNumberWithinRange(weight),
            name: e.name,
        };
    });

    return weightedEntries.sort((a, b) => b.weight - a.weight);
};
/**
 * Static query hook to return a ranked list of languages I use from the Github API.
 */
export const useGithubLanguageListings = () => {
    const stats = useGithubStats();

    return useMemo(() => {
        const entries: Record<string, LanguageEntry> = {};

        stats.repositories.forEach((r) =>
            r.languages.forEach((l) => {
                if (entries[l]) {
                    entries[l].weight++;
                } else {
                    entries[l] = { weight: 1, lastEdited: r.updatedAt };
                }
            })
        );

        const mostPopular = Object.keys(entries).reduce((a, b) => (entries[a] > entries[b] ? a : b));

        return { entries: weightEntries(entries), mostPopular };
    }, [stats]);
};
