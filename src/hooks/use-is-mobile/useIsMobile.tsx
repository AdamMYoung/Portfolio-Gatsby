import { useBreakpointValue } from '@chakra-ui/react';

export const useIsMobile = (): boolean => {
    return useBreakpointValue([true, null, false]);
};
