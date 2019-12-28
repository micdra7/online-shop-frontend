import React from 'react';
import './Burger.scss';

export interface BurgerProps {
    componentSize?: number;
    active: boolean;
    handleClick: (event?: any) => void;
}

const Burger: React.FC<BurgerProps> = ({ active, componentSize = 50, handleClick }) => (
    <div className={active ? 'burger active' : 'burger'} data-testid='burger'
        style={{width: `${componentSize}px`, height: `${componentSize}px`}}
        onClick={handleClick}>

        <span className='first' />
        <span className='second' />
        <span className='third' />
    </div>
);

export default Burger;
