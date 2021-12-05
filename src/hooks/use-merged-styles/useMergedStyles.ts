import { SystemStyleObject } from '@chakra-ui/styled-system';
import { useMemo } from 'react';
import { merge } from 'lodash';

export const useMergedStyles = (sx: SystemStyleObject = {}, styles: SystemStyleObject): SystemStyleObject => {
    return useMemo(() => merge(styles, sx ?? {}), [styles, sx]);
};
