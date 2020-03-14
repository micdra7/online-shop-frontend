import React, { useState, useCallback, useEffect } from 'react';
import './DiscountPage.scss';
import { Product, Discount } from '../../../utils/Types';
import { getDiscounts, getSelectedProducts } from '../../../utils/ApiCalls';
import ProductList from '../ProductList/ProductList';

export interface DiscountPageProps {
    addToCart: (productId: number, quantity: number) => void;
}

const DiscountPage: React.FC<DiscountPageProps> = ({ addToCart }) => {
    const [discounts, setDiscounts] = useState<Discount[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [pageContent, setPageContent] = useState();

    useEffect(() => {
        const fetchDiscounts = async () => {
            const response: Discount[] = await getDiscounts();

            setDiscounts(response);
        };

        fetchDiscounts();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const response: Product[] = await getSelectedProducts(
                discounts.map((discount) => discount.productID)
            );

            setProducts(response);
        };

        if (discounts.length > 0) {
            fetchProducts();
        }
    }, [discounts]);

    useEffect(() => {
        const currentProducts = products;
        currentProducts.forEach((product) => {
            const currentDiscounts = discounts.filter(
                (discount) => discount.productID === product.id
            );

            const maxDiscount = Math.max.apply(
                Math,
                currentDiscounts.map((d) => d.percentage)
            );
            product.price = product.price - product.price * (maxDiscount / 100);
        });

        setProducts(currentProducts);
        setPageContent(
            <ProductList products={products} addToCart={addToCart} />
        );
    }, [products]);

    return <div className='discount-page'>{pageContent}</div>;
};

export default DiscountPage;
