import React, { useState, useEffect } from 'react';
import './CartPage.scss';
import { Cart, Product } from '../../../utils/Types';
import CartItem from '../CartItem/CartItem';
import { getSelectedProducts } from '../../../utils/ApiCalls';

export interface CartPageProps {
    cart: Cart;
    clearCart: () => void;
    deleteItemFromCart: (productId: number) => void;
    updateItemQuantity: (productId: number, quantity: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, clearCart, deleteItemFromCart, updateItemQuantity }) => {

    const [products, setProducts] = useState<Product[]>([]);
    const [renderedItems, setRenderedItems] = useState();

    const clearCartAndUpdate = () => {
        clearCart();
        setProducts([]);
    };

    const deleteItemAndUpdate = (productId: number) => {
        deleteItemFromCart(productId);
        setProducts(products.filter((product) => product.id !== productId));
    };

    useEffect(() => {
        const fetchSelectedProducts = async () => {
            const response: Product[] = await getSelectedProducts(cart.cartItems.map((item) => item.productID));

            setProducts(response);
        };

        fetchSelectedProducts();
    }, []);

    useEffect(() => {
        if (products.length > 0 && cart.cartItems.length > 0) {
            const items = cart.cartItems.map((item) => (
                <CartItem key={item.productID}
                    deleteItemFromCart={deleteItemAndUpdate} updateItemQuantity={updateItemQuantity}
                    quantity={item.quantity} product={products.filter((product) => product.id === item.productID)[0]}/>
            ));

            setRenderedItems(items);
        } else if (products.length === 0) {
            setRenderedItems(undefined);
        }
    }, [products]);

    return (
        <div className='cart-page'>
            <button className='clear' onClick={clearCartAndUpdate}>
                Clear cart
            </button>

            {renderedItems}
        </div>
    );
};

export default CartPage;
