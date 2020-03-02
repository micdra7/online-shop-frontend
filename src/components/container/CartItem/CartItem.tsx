import React, { useState } from 'react';
import './CartItem.scss';
import { Product } from '../../../utils/Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface CartItemProps {
    deleteItemFromCart: (productId: number) => void;
    updateItemQuantity: (productId: number, quantity: number) => void;
    product: Product;
    quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ deleteItemFromCart, product, quantity, updateItemQuantity }) => {

    const [itemCount, setItemCount] = useState(quantity);

    const adjustItemCount = (event: any) => {
        const newQuantity = Number(event.target.value);

        setItemCount(newQuantity);
        updateItemQuantity(product.id, newQuantity);
    };

    return (
        <div className='cart-item'>
            <button className='delete' onClick={() => deleteItemFromCart(product.id)}>
                x
            </button>

            <div className='product-info'>
                <p>{product.producer?.name} {product.name}</p>
                <p>
                    <input type='number' className='quantity' value={itemCount}
                            onChange={adjustItemCount} min='1' max={product.availableQuantity} />
                </p>
            </div>

        </div>
    );
};

export default CartItem;
