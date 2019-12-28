import React, { useState } from 'react';
import './Navbar.scss';
import NavbarLink from '../../presentational/NavbarLink/NavbarLink';
import Burger from '../../presentational/Burger/Burger';

export interface NavbarProps {
    links: Array<{ href: string; text: string; }>;
    active: boolean;
    handleClick: (event?: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ links, active, handleClick }) => {

    const renderedLinks = links.map((link) => (
        <NavbarLink key={link.href} href={link.href} text={link.text} />));

    return (
        <nav className={active ? 'navbar active' : 'navbar'} data-testid='navbar'>

            <ul className='nav'>
                {renderedLinks}
            </ul>
            <Burger active={active} handleClick={handleClick} />

            <div className='bottom' />
        </nav>
    );
};

export default Navbar;
