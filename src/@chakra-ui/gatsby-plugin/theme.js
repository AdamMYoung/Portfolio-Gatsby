import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import { components } from './components';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { colors } from './colors';

const theme = {
    colors,
    fonts,
    fontSizes,
    components,
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
};

export default extendTheme(theme, withDefaultColorScheme({ colorScheme: 'red' }));
