import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './App.scss';

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

    const handleLinkClick = (event?: any) => {
        setBurgerActive(false);
    };

    return (
        <div className={burgerActive ? 'wrapper active' : 'wrapper'}>
            <Router>
                <Navbar links={links}
                    active={burgerActive}
                    handleClick={handleBurgerClick}
                    handleLinkClick={handleLinkClick} />

                <section className='main'>
                    <Switch>
                        <Route exact path='/'>
                            <h1>
                                {message}
                            </h1>
                        </Route>
                    </Switch>
                </section>
            </Router>
        </div>
    );
};

export default App;
