import { useQueryState } from '~hooks/use-query-state';

export const useNewsletterSubscription = () => {
    const { state, wrapQuery } = useQueryState();

    const subscribe = (email: string) => {
        wrapQuery(() => fetch(`/.netlify/functions/subscribe?email=${email}`));
    };

    return { state, subscribe };
};
