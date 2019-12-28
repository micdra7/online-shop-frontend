import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export interface AppProps { message: string; }

const App: React.FC<AppProps> = ({ message }) => {

    const links = [
        { href: '/', text: 'Home' },
        { href: '/categories', text: 'Categories' },
        { href: '/discounts', text: 'Discounts' },
        { href: '/cart', text: 'Cart' },
    ];

    return (
        <Router>
            <Navbar links={links} />

            <Switch>
                <Route exact path='/'>
                    <h1 data-testid='appComponent'>
                        {message}
                    </h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
