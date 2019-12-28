import React, { useState } from 'react';
import './Navbar.scss';
import NavbarLink from '../../presentational/NavbarLink/NavbarLink';
import Burger from '../../presentational/Burger/Burger';

export interface NavbarProps {
    links: Array<{ href: string; text: string; }>;
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {

    const [burgerActive, setBurgerActive] = useState(false);

    const handleBurgerClick = (event?: any) => {
        setBurgerActive(!burgerActive);
    };

    const renderedLinks = links.map((link) => (
        <NavbarLink key={link.href} href={link.href} text={link.text} />));

    return (
        <nav className='navbar' data-testid='navbar'>

            <ul className='nav'>
                {renderedLinks}
            </ul>
            <Burger active={burgerActive} handleClick={handleBurgerClick} />
        </nav>
    );
};

export default Navbar;
