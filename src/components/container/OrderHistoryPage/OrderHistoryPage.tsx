import React, { useState, useEffect } from 'react';
import './OrderHistoryPage.scss';
import { Order } from '../../../utils/Types';
import { getOrdersForUser } from '../../../utils/ApiCalls';
import SingleOrderPage from '../SingleOrderPage/SingleOrderPage';

const OrderHistoryPage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response: Order[] = await getOrdersForUser();

            setOrders(response);
        };

        fetchOrders();
    }, []);

    return (
        <div className='order-history'>
            {orders?.length > 0 ? (
                orders.map((order) => (
                    <SingleOrderPage
                        key={order.dateAndTime + order.applicationUserId}
                        id={order.id}
                    />
                ))
            ) : (
                <></>
            )}
        </div>
    );
};

export default OrderHistoryPage;
