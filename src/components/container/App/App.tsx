import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './App.scss'

export interface AppProps { message: string; }

const App: React.FC<AppProps> = ({ message }) => {

    const links = [
        { href: '/', text: 'Home' },
        { href: '/categories', text: 'Categories' },
        { href: '/discounts', text: 'Discounts' },
        { href: '/cart', text: 'Cart' },
    ];

    const [burgerActive, setBurgerActive] = useState(false);

    const handleBurgerClick = (event?: any) => {
        setBurgerActive(!burgerActive);
    };

    return (
        <div className={burgerActive ? 'wrapper active' : 'wrapper'}>
            <Router>
                <Navbar links={links} active={burgerActive} handleClick={handleBurgerClick} />

                <Switch>
                    <Route exact path='/'>
                        <h1 data-testid='appComponent'>
                            {message}
                        </h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
