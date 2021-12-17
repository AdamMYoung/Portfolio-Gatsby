import { SystemStyleObject } from '@chakra-ui/react';
import { merge } from 'lodash';
import { useMemo } from 'react';

/**
 * Hook to deeply merge styles from multiple sources.
 * @param sx Style object passed into the component.
 * @param styles Internal styles of the component.
 * @returns A deeply merged style object.
 */
export const useMergedStyles = (sx: SystemStyleObject = {}, styles: SystemStyleObject): SystemStyleObject => {
    return useMemo(() => merge(styles, sx ?? {}), [styles, sx]);
};
