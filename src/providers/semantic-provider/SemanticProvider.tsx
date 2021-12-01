import React, { FC, useCallback, useMemo, useState } from 'react';

export type SemanticElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type SemanticContextOptions = {
    semanticElement: SemanticElement;
    declaredSemanticElements: SemanticElement[];
    addDeclaredSemanticElement: (element?: SemanticElement) => void;
};

const SemanticElementSet: SemanticElement[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

const SemanticContext = React.createContext<SemanticContextOptions>({
    semanticElement: 'h1',
    declaredSemanticElements: [],
    addDeclaredSemanticElement: () => {},
});

/**
 * Provider to allow dynamic semantic elements based on the structure of the page.
 */
export const SemanticProvider: FC = ({ children }) => {
    const { semanticElement, declaredSemanticElements } = React.useContext(SemanticContext);

    const [declaredElements, setDeclaredElements] = useState<SemanticElement[]>(declaredSemanticElements);

    const addDeclaredElement = useCallback(
        (element: SemanticElement) => {
            if (!declaredElements.includes(element)) {
                setDeclaredElements([...declaredElements, element]);
            }
        },
        [declaredElements, setDeclaredElements]
    );

    /**
     * The next semantic element to use in the heading hierarchy.
     */
    const element = useMemo(() => {
        const index = SemanticElementSet.indexOf(semanticElement);
        const nextElement = declaredSemanticElements.includes(semanticElement) ? index + 1 : index;

        if (nextElement > SemanticElementSet.length - 1) {
            return 'p';
        }

        return SemanticElementSet[nextElement];
    }, [semanticElement]);

    return (
        <SemanticContext.Provider
            value={{
                semanticElement: element,
                declaredSemanticElements: declaredElements,
                addDeclaredSemanticElement: addDeclaredElement,
            }}
        >
            {children}
        </SemanticContext.Provider>
    );
};

/**
 * Hook to return the semantic element to use as the current heading.
 */
export const useSemanticElement = () => {
    const { semanticElement, addDeclaredSemanticElement } = React.useContext(SemanticContext);

    useMemo(() => addDeclaredSemanticElement(semanticElement), []);

    return semanticElement;
};
