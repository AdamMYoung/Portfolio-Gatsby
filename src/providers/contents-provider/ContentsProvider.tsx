import React, { createContext, FC, useCallback, useContext, useMemo, useState } from 'react';

export type ContentsEntry = {
    title: string;
    anchor: string;
    heading: 'h2' | 'h3';
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

    const entries = useMemo(() => contents.filter((c) => c.heading === 'h2' || c.heading === 'h3'), [contents]);

    return (
        <ContentsContext.Provider value={{ entries, register: handleRegister }}>{children}</ContentsContext.Provider>
    );
};

export const useContents = () => useContext(ContentsContext);
