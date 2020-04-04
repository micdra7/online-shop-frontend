import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface NavbarLinkProps {
    href: string;
    text: string;
    icon: any;
    isSelected: boolean;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
    href,
    text,
    icon,
    isSelected,
}) => (
    <li
        className={isSelected ? 'navbar-link selected' : 'navbar-link'}
        data-testid='navbar-link'>
        <Link to={href}>
            <FontAwesomeIcon icon={icon} />
            <p>{text}</p>
        </Link>
    </li>
);

export default NavbarLink;
