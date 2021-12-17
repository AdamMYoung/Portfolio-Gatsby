import { useBreakpointValue } from '@chakra-ui/react';

/**
 * Hook to return true if the current breakpoint is mobile.
 * @returns True if the current screen width is mobile size.
 */
export const useIsMobile = (): boolean => {
    return useBreakpointValue([true, null, false]);
};
