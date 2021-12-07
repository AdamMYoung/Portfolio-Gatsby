import React, { FC } from 'react';

type CategoryListContextOptions = {
    onCategorySelected: (category: string) => void;
    selectedCategories: string[];
};

export type CategoryListProviderProps = {
    onCategoriesChanged?: (categories: string[]) => void;
    onCategorySelected?: (category: string) => void;
};

export const CategoryListContext = React.createContext<CategoryListContextOptions>({
    onCategorySelected: (_: string) => {},
    selectedCategories: [],
});

export const useCategoryList = () => React.useContext(CategoryListContext);

export const CategoryListProvider: FC<CategoryListProviderProps> = ({
    onCategoriesChanged,
    onCategorySelected,
    children,
}) => {
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

    const handleCategorySelected = (category: string) => {
        let categories = [...selectedCategories];

        if (categories.includes(category)) {
            categories = categories.filter((c) => c !== category);
        } else {
            categories.push(category);
        }

        setSelectedCategories(categories);

        onCategorySelected?.(category);
        onCategoriesChanged?.(categories);
    };

    return (
        <CategoryListContext.Provider value={{ selectedCategories, onCategorySelected: handleCategorySelected }}>
            {children}
        </CategoryListContext.Provider>
    );
};
