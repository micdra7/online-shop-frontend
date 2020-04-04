import React, { useState, useEffect } from 'react';
import './SingleOrderPage.scss';
import { Order, Product } from '../../../utils/Types';
import { getOrder } from '../../../utils/ApiCalls';
import ProductTable from '../../presentational/ProductTable/ProductTable';

export interface SingleOrderPageProps {
    id: number;
}

const SingleOrderPage: React.FC<SingleOrderPageProps> = ({ id }) => {
    const [order, setOrder] = useState<Order>();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchOrder = async () => {
            const response: Order = await getOrder(id);

            setOrder(response);
        };

        fetchOrder();
    }, []);

    useEffect(() => {
        if (order) {
            order.details.forEach((detail) => {
                detail.product.availableQuantity = detail.quantity;
            });

            const newProducts: Product[] = order.details.map(
                (detail) => detail.product
            );

            setProducts(newProducts);
        }
    }, [order]);

    return (
        <div className='order'>
            {order ? (
                <main className='order-data'>
                    <p>{order.dateAndTime}</p>
                    <p>{order.note}</p>
                </main>
            ) : (
                <></>
            )}

            {products.length > 0 ? <ProductTable products={products} /> : <></>}
        </div>
    );
};

export default SingleOrderPage;
