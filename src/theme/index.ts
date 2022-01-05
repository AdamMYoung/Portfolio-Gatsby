import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { colors } from './colors';
import { components } from './components';
import { fonts } from './fonts';
import { fontSizes } from './fontSizes';
import { shadows } from './shadows';
import { styles } from './styles';

const theme = {
    styles,
    colors,
    fonts,
    fontSizes,
    shadows,
    components,
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
};

export default extendTheme(theme, withDefaultColorScheme({ colorScheme: 'red' }));
