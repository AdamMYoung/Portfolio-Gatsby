import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import React from 'react';

import { MenuIconButton } from '../../components';

export const DarkModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <MenuIconButton
            aria-label={`Enable ${colorMode === 'light' ? 'dark' : 'light'} mode`}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
        />
    );
};
