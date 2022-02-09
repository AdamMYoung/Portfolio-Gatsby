import { useQueryState } from '~hooks/use-query-state';

/**
 * Hook to submit email newsletter subscriptions.
 */
export const useNewsletterSubscription = () => {
    const { state, wrapQuery } = useQueryState();

    const subscribe = (email: string) => {
        wrapQuery(() => fetch(`/.netlify/functions/subscribe?email=${email}`));
    };

    return { state, subscribe };
};
