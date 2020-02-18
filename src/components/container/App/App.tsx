import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import ImageSlider from '../ImageSlider/ImageSlider';

export interface AppProps { message: string; }

const App: React.FC<AppProps> = ({ message }) => {

    const links = [
        { href: '/', text: 'Home' },
        { href: '/categories', text: 'Categories' },
        { href: '/discounts', text: 'Discounts' },
        { href: '/cart', text: 'Cart' },
    ];

    const imageLinks = [
        'https://localhost:5001/images/1.png',
        'https://localhost:5001/images/7.png',
        'https://localhost:5001/images/15.png',
        'https://localhost:5001/images/17.png',
    ];

    const hrefs = [
        '/product/1',
        '/product/7',
        '/product/15',
        '/product/17',
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
                            <ImageSlider imageLinks={imageLinks} hrefs={hrefs} />
                        </Route>
                    </Switch>
                </section>
            </Router>
        </div>
    );
};

export default App;
