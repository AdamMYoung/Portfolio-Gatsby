import React from 'react';

import Link from '../../link';
import { NavLinks } from './styles';

const Navigation = () => {
    return (
        <nav className="p-4 sm:flex bg-indigo-800 border-b-4 border-indigo-500 sm:bg-transparent sm:border-b-0 text-center sm:text-left">
            <Link color="text-indigo-100 sm:text-indigo-200" className="text-2xl font-bold focus:ring" to="/">
                Adam Young
            </Link>

            <NavLinks className="flex ml-auto items-center mt-2 sm:mt-0">
                <Link color="text-indigo-100 sm:text-indigo-200" to="/work">
                    Work
                </Link>
                <Link color="text-indigo-100 sm:text-indigo-200" to="/projects">
                    Projects
                </Link>
                <Link color="text-indigo-100 sm:text-indigo-200" to="/skills">
                    Skills
                </Link>
                <Link color="text-indigo-100 sm:text-indigo-200" to="/blog">
                    Blog
                </Link>
            </NavLinks>
        </nav>
    );
};

export default Navigation;
