import React, { useState } from 'react';
import './Navbar.scss';
import NavbarLink from '../../presentational/NavbarLink/NavbarLink';
import Burger from '../../presentational/Burger/Burger';
import { useLocation } from 'react-router-dom';

export interface NavbarProps {
    links: Array<{ href: string; text: string; icon: any }>;
    active: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ links, active }) => {
    const location = useLocation();

    const renderedLinks = links.map((link) => (
        <NavbarLink
            key={link.href}
            href={link.href}
            text={link.text}
            icon={link.icon}
            isSelected={location.pathname === link.href}
        />
    ));

    return (
        <nav className={active ? 'navbar active' : 'navbar'}>
            <ul className='nav'>{renderedLinks}</ul>
        </nav>
    );
};

export default Navbar;
