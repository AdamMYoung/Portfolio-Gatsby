import React, { createContext, FC, useCallback, useContext, useState } from 'react';

type ContentsEntry = {
    title: string;
    anchor: string;
    heading: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

type ContentsContextOptions = {
    entries: ContentsEntry[];
    register: (entry: ContentsEntry) => void;
};

const ContentsContext = createContext<ContentsContextOptions>({ entries: [], register: () => {} });

export const ContentsProvider: FC = ({ children }) => {
    const [contents, setContents] = useState<ContentsEntry[]>([]);

    const handleRegister = useCallback(
        (entry: ContentsEntry) => {
            setContents((entries) => [...entries, entry]);
        },
        [setContents]
    );

    return (
        <ContentsContext.Provider value={{ entries: contents, register: handleRegister }}>
            {children}
        </ContentsContext.Provider>
    );
};

export const useContents = () => useContext(ContentsContext);
