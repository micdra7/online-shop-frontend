import React from 'react';
import './ProductTableElement.scss';
import { Link } from 'react-router-dom';

export interface ProductTableElementProps {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const ProductTableElement: React.FC<ProductTableElementProps> = ({
    id,
    name,
    price,
    quantity,
}) => (
    <div className='product-table-element'>
        <main className='product-name'>
            <Link to={`/product/${id}`}>{name}</Link>
        </main>
        <aside className='product-data'>
            <span className='price'>{`$${price}`}</span>
            <span className='quantity'>{quantity}</span>
        </aside>
    </div>
);

export default ProductTableElement;
