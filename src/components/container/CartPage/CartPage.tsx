import React, { useState, useEffect } from 'react';
import './CartPage.scss';
import { Cart, Product } from '../../../utils/Types';
import CartItem from '../CartItem/CartItem';

export interface CartPageProps {
    cart: Cart;
    clearCart: () => void;
    deleteItemFromCart: (productId: number ) => void;
    updateItemQuantity: (productId: number, quantity: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, clearCart, deleteItemFromCart, updateItemQuantity }) => {

    const [products, setProducts] = useState<Product[]>([]);

    // const renderedItems = cart.cartItems.map((item) => (
    //     <CartItem key={item.}
    //     deleteItemFromCart={deleteItemFromCart} updateItemQuantity={updateItemQuantity}
    //     quantity={item.quantity} product={}/>
    // ));

    return (
        <div className='cart-page'>
            <button className='clear' onClick={clearCart}>
                Clear cart
            </button>
        </div>
    );
};

export default CartPage;
