import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { MenuIconButton } from '../../components';

export const DarkModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const isMobile = useBreakpointValue([true, null, null, false]);

    if (isMobile) {
        return (
            <Button
                onClick={toggleColorMode}
                variant="outline"
                leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            >
                {`${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
            </Button>
        );
    }

    return (
        <MenuIconButton
            aria-label={`Enable ${colorMode === 'light' ? 'dark' : 'light'} mode`}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
        />
    );
};
