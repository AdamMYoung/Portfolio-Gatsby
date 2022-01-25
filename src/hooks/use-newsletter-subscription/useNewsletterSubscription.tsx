import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useLocalStorage } from 'react-use';
import { useQueryState } from '~hooks/use-query-state';

export const useNewsletterSubscription = () => {
    const [isSubscribed, setSubscribed] = useLocalStorage('isSubscribed', false);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const { state, wrapQuery } = useQueryState();

    const subscribe = async (email: string) => {
        const token = await executeRecaptcha('subscribe-to-newsletter');

        await wrapQuery(() => fetch(`/netlify/functions/subscribe?email=${email}&token=${token}`));
        setSubscribed(true);
    };

    return { state: { ...state, success: state.success || isSubscribed }, subscribe };
};
