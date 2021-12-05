import { mode } from '@chakra-ui/theme-tools';

export const Button = {
    baseStyle: {
        rounded: 'full',
        p: 8,
        _hover: {
            textDecoration: 'none',
        },
    },
    variants: {
        link: (theme) => ({
            color: mode('gray.700', 'white')(theme),
        }),
    },
};
