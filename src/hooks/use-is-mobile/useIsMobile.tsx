import { useBreakpointValue } from '@chakra-ui/media-query';

export const useIsMobile = (): boolean => {
    return useBreakpointValue([true, null, false]);
};
