import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import Footer from '../../presentational/Footer/Footer';
import CategoryPage from '../CategoryPage/CategoryPage';
import SubcategoryPage from '../SubcategoryPage/SubcategoryPage';
import ProductPage from '../ProductPage/ProductPage';
import { Cart } from '../../../utils/Types';
import { sessionStorageCartKey } from '../../../utils/Constants';

const App: React.FC = () => {

    const links = [
        { href: '/', text: 'Home' },
        { href: '/categories', text: 'Categories' },
        { href: '/discounts', text: 'Discounts' },
        { href: '/cart', text: 'Cart' },
    ];

    const [burgerActive, setBurgerActive] = useState(false);
    const [cart, setCart] = useState<Cart>({
        userID: '',
        shippingMethodID: 0,
        note: '',
        cartItems: []
    });

    const handleBurgerClick = (event?: any) => {
        setBurgerActive(!burgerActive);
    };

    const handleLinkClick = (event?: any) => {
        setBurgerActive(false);
    };

    const addToCart = (productId: number, quantity: number) => {
        setCart({
            ...cart,
            cartItems: cart.cartItems.concat({
                productID: productId,
                quantity
            })
        });
    };

    // saving cart in sessionStorage in case user refreshes the page
    useEffect(() => {
        const sessionCart: Cart = JSON.parse(sessionStorage.getItem(sessionStorageCartKey));

        if (sessionCart) {
            setCart(sessionCart);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem(sessionStorageCartKey, JSON.stringify(cart));
    }, [cart.cartItems]);

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
                            <HomePage addToCart={addToCart} />
                        </Route>
                        <Route path='/categories'>
                            <CategoryPage />
                        </Route>
                        <Route path='/subcategory/:subcategoryId'>
                            <SubcategoryPage addToCart={addToCart} />
                        </Route>
                        <Route path='/product/:productId'>
                            <ProductPage addToCart={addToCart} />
                        </Route>
                    </Switch>

                    <Footer />
                </section>
            </Router>
        </div>
    );
};

export default App;
