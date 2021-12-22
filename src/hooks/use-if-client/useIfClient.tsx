/**
 * Hook to execute the provided function only if executing in the browser.
 * Useful in SSG environments such as Gatsby, when accessing window or document elements.
 */
export const useIfClient = <T extends any>(func: () => T, defaultValue?: T): T | undefined => {
    const isSsr = typeof window !== 'undefined';
    return isSsr ? func() : defaultValue;
};
