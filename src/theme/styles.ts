import { mode } from '@chakra-ui/theme-tools';

export const styles = {
    global: (props) => ({
        html: {
            scrollBehavior: 'smooth',
        },
        body: {
            background: mode('white', '#121212')(props),
        },
    }),
};
