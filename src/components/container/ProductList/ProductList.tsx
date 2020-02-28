import React from 'react';
import './ProductList.scss';
import { Product } from '../../../utils/Types';
import ProductElement from '../../presentational/ProductElement/ProductElement';

export interface ProductListProps {
    products: Product[];
    message?: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, message }) => {

    const addToCartClick = (id: number) => {
        alert(id);
    };

    const renderedProducts = products.map((product) => (
        <ProductElement key={product.name} name={product.name} productId={product.id}
            price={product.price} producerName={product.producer?.name} addToCartClick={addToCartClick} />
    ));

    return (
        <div className='product-list'>
            {message ? (<h5>{message}</h5>) : (<></>)}
            <div className='products'>
                {renderedProducts}
            </div>
        </div>
    );
};

export default ProductList;
