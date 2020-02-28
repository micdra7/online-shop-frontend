import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Footer from '../../presentational/Footer/Footer';
import CategoryPage from '../CategoryPage/CategoryPage';
import SubcategoryPage from '../SubcategoryPage/SubcategoryPage';

const App: React.FC = () => {

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
                            <HomePage />
                        </Route>
                        <Route path='/categories'>
                            <CategoryPage />
                        </Route>
                        <Route path='/subcategory/:subcategoryId'>
                            <SubcategoryPage />
                        </Route>
                    </Switch>

                    <Footer />
                </section>
            </Router>
        </div>
    );
};

export default App;
