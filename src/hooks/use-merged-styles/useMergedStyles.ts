import { SystemStyleObject } from '@chakra-ui/react';
import { merge } from 'lodash';
import { useMemo } from 'react';

export const useMergedStyles = (sx: SystemStyleObject = {}, styles: SystemStyleObject): SystemStyleObject => {
    return useMemo(() => merge(styles, sx ?? {}), [styles, sx]);
};
