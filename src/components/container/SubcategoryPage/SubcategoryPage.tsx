import React, { useState, useEffect } from 'react';
import './SubcategoryPage.scss';
import { useParams } from 'react-router-dom';
import { Product } from '../../../utils/Types';
import { getProducts } from '../../../utils/ApiCalls';
import ProductList from '../ProductList/ProductList';

const SubcategoryPage: React.FC = () => {

    const { subcategoryId } = useParams();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response: Product[] = (await getProducts(Number(subcategoryId))).products;

            setProducts(response);
        };

        fetchProducts();
    }, []);

    return (
        <div className='subcategory-page'>
            {products.length > 0 ? <ProductList products={products} /> : <></>}
        </div>
    );
};

export default SubcategoryPage;
