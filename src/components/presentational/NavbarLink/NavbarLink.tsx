import React from 'react';
import { Link } from 'react-router-dom';

import './NavbarLink.scss';

export interface NavbarLinkProps {
    href: string;
    text: string;
    handleClick: (event?: any) => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, text, handleClick }) => (
    <li className='navbar-link' data-testid='navbar-link' onClick={handleClick}>
        <Link to={href}>
            {text}
        </Link>
    </li>
);

export default NavbarLink;
