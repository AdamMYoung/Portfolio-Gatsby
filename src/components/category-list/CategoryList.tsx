import { Button, ButtonProps } from '@chakra-ui/button';
import { Flex, FlexProps } from '@chakra-ui/layout';
import React, { FC, useMemo } from 'react';

import { useMergedStyles } from '../../hooks';
import { CategoryListProvider, CategoryListProviderProps, useCategoryList } from './CategoryListProvider';

type CategoryListProps = CategoryListProviderProps & FlexProps;

type CategoryListItemProps = ButtonProps & {
    categoryKey: string;
};

export const CategoryList: FC<CategoryListProps> = ({ onCategoriesChanged, children, sx, ...rest }) => {
    const _sx = useMergedStyles(sx, { '*': { m: 1 } });

    return (
        <CategoryListProvider onCategoriesChanged={onCategoriesChanged}>
            <Flex flexWrap="wrap" sx={_sx} {...rest}>
                {children}
            </Flex>
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
        <Button onClick={handleClick} variant="outline" isActive={isSelected} {...rest}>
            {children}
        </Button>
    );
};
