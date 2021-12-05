import { mode } from '@chakra-ui/theme-tools';

export const Text = {
    baseStyle: {
        fontWeight: 'normal',
        lineHeight: 1.3,
    },
    variants: {
        subtitle: (props) => ({
            color: mode('gray.600', 'gray.400')(props),
        }),
    },
};
