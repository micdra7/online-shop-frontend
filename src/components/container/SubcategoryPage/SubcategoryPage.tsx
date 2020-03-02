import React, { useState, useEffect } from 'react';
import './SubcategoryPage.scss';
import { useParams } from 'react-router-dom';
import { Product } from '../../../utils/Types';
import { getSubcategoryAndProducts } from '../../../utils/ApiCalls';
import ProductList from '../ProductList/ProductList';

export interface SubcategoryPageProps {
    addToCart: (productId: number, quantity: number) => void;
}

const SubcategoryPage: React.FC<SubcategoryPageProps> = ({ addToCart }) => {

    const { subcategoryId } = useParams();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response: Product[] = (await getSubcategoryAndProducts(Number(subcategoryId))).products;

            setProducts(response);
        };

        fetchProducts();
    }, []);

    return (
        <div className='subcategory-page'>
            {products.length > 0 ? <ProductList products={products} addToCart={addToCart} /> : <></>}
        </div>
    );
};

export default SubcategoryPage;
