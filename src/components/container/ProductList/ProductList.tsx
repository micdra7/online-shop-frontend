import React from 'react';
import './ProductList.scss';
import { Product } from '../../../utils/Types';
import ProductElement from '../../presentational/ProductElement/ProductElement';

export interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

    const addToCartClick = (id: number) => {
        alert(id);
    };

    const renderedProducts = products.map((product) => (
        <ProductElement key={product.name} name={product.name} productId={product.id} 
            price={product.price} addToCartClick={addToCartClick} />
    ));

    return (
        <div className='product-list'>
            <h5>Recently bought</h5>
            {renderedProducts}
        </div>
    );
};

export default ProductList;
