import React, { useState, useEffect } from 'react';
import './OrderHistoryPage.scss';
import { Order } from '../../../utils/Types';
import { getOrdersForUser } from '../../../utils/ApiCalls';

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
            {orders.length > 0 ? (
                orders.map((order) => (
                    <p key={order.dateAndTime.toString()}>
                        {order.id}
                        {order.dateAndTime.toString()}
                    </p>
                ))
            ) : (
                <></>
            )}
        </div>
    );
};

export default OrderHistoryPage;
