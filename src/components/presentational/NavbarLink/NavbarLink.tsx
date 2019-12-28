import React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarLinkProps {
    href: string;
    text: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, text }) => (
    <li data-testid='navbar-link'>
        <Link to={href}>
            {text}
        </Link>
    </li>
);

export default NavbarLink;
