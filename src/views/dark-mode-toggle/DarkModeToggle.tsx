import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const DarkModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            variant="outline"
            boxSize="64px"
            size="lg"
            aria-label={`Enable ${colorMode === 'light' ? 'dark' : 'light'} mode`}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
        />
    );
};
