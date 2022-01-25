import { useLocalStorage } from 'react-use';
import { useQueryState } from '~hooks/use-query-state';

export const useNewsletterSubscription = () => {
    const [isSubscribed, setSubscribed] = useLocalStorage('isSubscribed', false);

    const { state, wrapQuery } = useQueryState();

    const subscribe = async (email: string) => {
        await wrapQuery(() => fetch(`/.netlify/functions/subscribe?email=${email}`));
        setSubscribed(true);
    };

    return { state: { ...state, success: state.success || isSubscribed }, subscribe };
};
