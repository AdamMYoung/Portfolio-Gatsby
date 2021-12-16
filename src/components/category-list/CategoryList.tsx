import { Button, ButtonProps, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, useMemo } from 'react';
import {
    useViewportTransition,
    getItemMotion,
    getContainerMotion,
    MotionButton,
    MotionButtonProps,
    MotionFlex,
    MotionFlexProps,
} from '~components/motion';

import { useMergedStyles } from '~hooks';
import { CategoryListProvider, CategoryListProviderProps, useCategoryList } from './CategoryListProvider';

type CategoryListProps = CategoryListProviderProps & MotionFlexProps;

type CategoryListItemProps = MotionButtonProps & {
    categoryKey: string;
};

export const CategoryList: FC<CategoryListProps> = ({
    onCategoriesChanged,
    onCategorySelected,
    children,
    sx,
    ...rest
}) => {
    const _sx = useMergedStyles(sx, { '*': { m: 1 } });

    return (
        <CategoryListProvider onCategoriesChanged={onCategoriesChanged} onCategorySelected={onCategorySelected}>
            <MotionFlex
                variants={getContainerMotion('fastest')}
                {...useViewportTransition()}
                flexWrap="wrap"
                sx={_sx}
                {...rest}
            >
                {children}
            </MotionFlex>
        </CategoryListProvider>
    );
};

export const CategoryListItem: FC<CategoryListItemProps> = ({ children, categoryKey, onClick, ...rest }) => {
    const { onCategorySelected, selectedCategories } = useCategoryList();

    const isSelected = useMemo(() => selectedCategories.includes(categoryKey), [selectedCategories, categoryKey]);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        onClick?.(e);
        onCategorySelected(categoryKey);
    };

    return (
        <MotionButton
            variants={getItemMotion()}
            onClick={handleClick}
            variant="outline"
            isActive={isSelected}
            {...rest}
        >
            {children}
        </MotionButton>
    );
};
