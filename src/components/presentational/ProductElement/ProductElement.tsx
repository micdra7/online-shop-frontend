import React from 'react';
import './ProductElement.scss';
import { currentLink } from '../../../utils/ApiCalls';
import { Link } from 'react-router-dom';

export interface ProductElementProps {
    productId: number;
    name: string;
    price: number;
    addToCartClick: (productId: number, quantity: number) => void;
    producerName?: string;
}

const ProductElement: React.FC<ProductElementProps> = ({ productId, name, price, addToCartClick, producerName }) => (
    <div className='product-element'>
        <Link to={`/product/${productId}`}>
            <img src={`${currentLink}/images/${productId}.png`} alt={`Image for product ${name}`} />

            <p className='price'>
                {price}$
            </p>
            <p className='name'>
                {producerName ? `${producerName} ` : ''}{name}
            </p>
        </Link>

        <button className='add-to-cart' onClick={() => addToCartClick(productId, 1)}>
            Add to cart
        </button>
    </div>
);

export default ProductElement;
