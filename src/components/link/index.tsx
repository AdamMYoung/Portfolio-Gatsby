import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

type Props = {
    className?: string;
    color?: string;
    type?: 'gatsby' | 'external';
    to: string;
};

const linkStyles =
    'block px-1 transition rounded-lg hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400';

const Link: React.FC<Props> = (props) => {
    const { children, to, className, type = 'gatsby', color = 'text-indigo-300' } = props;

    if (type === 'gatsby') {
        return (
            <GatsbyLink className={`${className} ${linkStyles} ${color}`} to={to}>
                {children}
            </GatsbyLink>
        );
    }

    if (type == 'external') {
        return (
            <a className={`${className} ${linkStyles} ${color}`} href={to} target="_blank" rel="noopener">
                {children}
            </a>
        );
    }

    return null;
};

export default Link;
