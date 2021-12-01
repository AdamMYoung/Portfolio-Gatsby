import { mode } from '@chakra-ui/theme-tools';

export const Text = {
    variants: {
        subtitle: (props) => ({
            color: mode('gray.600', 'gray.400')(props),
        }),
    },
};
