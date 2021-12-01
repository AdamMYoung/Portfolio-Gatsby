import { mode } from '@chakra-ui/theme-tools';

export const Heading = {
    baseStyle: {
        fontWeight: 'light',
        lineHeight: 1.1,
    },
    variants: {
        subtitle: (props) => ({
            color: mode('gray.600', 'gray.400')(props),
        }),
    },
};
