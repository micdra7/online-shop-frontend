import React from 'react';
import './ProductTable.scss';
import { Product } from '../../../utils/Types';
import ProductTableElement from '../ProductTableElement/ProductTableElement';

export interface ProductTableProps {
    products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => (
    <section className='product-table'>
        {products.map((product) => (
            <ProductTableElement
                key={product.name}
                id={product.id}
                name={product.name}
                price={product.price}
                quantity={product.availableQuantity}
            />
        ))}
    </section>
);

export default ProductTable;
