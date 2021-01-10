import React from 'react';

import { StyledList } from './styles';

type Props = {
    active?: boolean;
    className?: string;
    children: React.ReactNode;
};

const ListItem: React.FC = (props) => {
    return <li className="px-1 py-0.5 rounded-lg">{props.children}</li>;
};

const List = (props: Props) => {
    return (
        <StyledList active={props.active} className={`w-full ${props.className}`}>
            {props.children}
        </StyledList>
    );
};

List.Item = ListItem;

export default List;
