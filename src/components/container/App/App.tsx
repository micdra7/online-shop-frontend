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
import { sessionStorageCartKey, initialCartState } from '../../../utils/Constants';
import CartPage from '../CartPage/CartPage';
import LoginRegisterPage from '../LoginRegisterPage/LoginRegisterPage';
import DiscountPage from '../DiscountPage/DiscountPage';
import PrivateRoute from '../../presentational/PrivateRoute/PrivateRoute';
import OrderPage from '../OrderPage/OrderPage';
import { refreshJWT } from '../../../utils/ApiCalls';

const App: React.FC = () => {

    const links = [
        { href: '/', text: 'Home' },
        { href: '/categories', text: 'Categories' },
        { href: '/discounts', text: 'Discounts' },
        { href: '/cart', text: 'Cart' },
        { href: '/login', text: 'Login / Register'}
    ];

    const [burgerActive, setBurgerActive] = useState(false);
    const [cart, setCart] = useState<Cart>(initialCartState);

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

    const clearCart = () => {
        setCart(initialCartState);
    };

    const deleteItemFromCart = (productId: number) => {
        const newCartItems = cart.cartItems.filter((item) => item.productID !== productId);

        setCart({
            ...cart,
            cartItems: newCartItems
        });
    };

    const updateItemQuantity = (productId: number, quantity: number) => {
        let newCartItems = cart.cartItems.filter((item) => item.productID !== productId);

        newCartItems = newCartItems.concat({productID: productId, quantity});

        setCart({
            ...cart,
            cartItems: newCartItems
        });
    };

    // saving cart in sessionStorage in case user refreshes the page
    useEffect(() => {
        const sessionCart: Cart = JSON.parse(sessionStorage.getItem(sessionStorageCartKey));

        if (sessionCart) {
            setCart(sessionCart);
        }

        // TODO delete when not needed
        clearCart();
    }, []);

    useEffect(() => {
        const reauthenticate = async () => {
            await refreshJWT();
        };

        reauthenticate();
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

                        <Route path='/discounts'>
                            <DiscountPage addToCart={addToCart} />
                        </Route>

                        <Route path='/cart'>
                            <CartPage
                                cart={cart}
                                clearCart={clearCart}
                                deleteItemFromCart={deleteItemFromCart}
                                updateItemQuantity={updateItemQuantity} />
                        </Route>

                        <PrivateRoute path='/order'>
                            <OrderPage />
                        </PrivateRoute>

                        <Route path='/login'>
                            <LoginRegisterPage />
                        </Route>
                    </Switch>

                    <Footer />
                </section>
            </Router>
        </div>
    );
};

export default App;
