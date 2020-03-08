import React, { useEffect, useReducer, useState } from 'react';
import './OrderPage.scss';
import { Cart, Product, ShippingMethod, UserDetail, PaymentType } from '../../../utils/Types';
import { orderPageReducer } from '../../../utils/Reducers';
import { getShippingMethods, getUserDetails, getPaymentTypes, sendOrder } from '../../../utils/ApiCalls';
import { ACTION_SET_ADDRESS_1, ACTION_SET_ADDRESS_2, ACTION_SET_ADDRESS_3, ACTION_SET_PAYMENT_TYPE_ID, ACTION_SET_SHIPPING_METHOD_ID, ACTION_SET_ORDER_NOTE, LOCAL_STORAGE_USERNAME_KEY } from '../../../utils/Constants';
import AddressForm from '../../presentational/AddressForm/AddressForm';
import PaymentTypeSelector from '../../presentational/PaymentTypeSelector/PaymentTypeSelector';
import ShippingMethodSelector from '../../presentational/ShippingMethodSelector/ShippingMethodSelector';

export interface OrderPageProps {
    cart: Cart;
}

const OrderPage: React.FC<OrderPageProps> = ({ cart }) => {

    const initialState = {
        cart,
        shippingMethodId: 0,
        paymentTypeId: 0,
        note: '',
        address1: '',
        address2: '',
        address3: ''
    };

    const [state, dispatch] = useReducer(orderPageReducer, initialState);
    const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([]);
    const [paymentTypes, setPaymentTypes] = useState<PaymentType[]>([]);
    const [userDetails, setUserDetails] = useState<UserDetail[]>([]);

    const handlePaymentTypeChange = (event: any) => {
        dispatch({
            type: ACTION_SET_PAYMENT_TYPE_ID,
            payload: event.target.value
        });
    };

    const handleShippingMethodChange = (event: any) => {
        dispatch({
            type: ACTION_SET_SHIPPING_METHOD_ID,
            payload: event.target.value
        });
    };

    useEffect(() => {
        const fetchShippingMethods = async () => {
            const response: ShippingMethod[] = await getShippingMethods();

            setShippingMethods(response);
        };

        const fetchPaymentTypes = async () => {
            const response: PaymentType[] = await getPaymentTypes();

            setPaymentTypes(response);
        };

        const fetchUserDetails = async () => {
            const response: UserDetail[] = await getUserDetails();

            setUserDetails(response);

            if (response[0].address1 !== null) {
                dispatch({type: ACTION_SET_ADDRESS_1, payload: response[0].address1});
            }

            if (response[0].address2 !== null) {
                dispatch({type: ACTION_SET_ADDRESS_2, payload: response[0].address2});
            }

            if (response[0].address2 !== null) {
                dispatch({type: ACTION_SET_ADDRESS_3, payload: response[0].address3});
            }
        };

        fetchShippingMethods();
        fetchPaymentTypes();
        fetchUserDetails();
    }, []);

    const submitOrder = () => {
        const sendOrderPost = async (): Promise<boolean> => {
            const response = await sendOrder({
                ...cart,
                username: localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY),
                note: state.note,
                shippingMethodID: state.shippingMethodId
            });

            return response !== null;
        };

        sendOrderPost();
    };

    return (
        <div className='order-page'>
            <AddressForm
                address1={state.address1}
                address2={state.address2}
                address3={state.address3}
                dispatch={dispatch} />

            <PaymentTypeSelector
                paymentTypes={paymentTypes}
                selectedId={state.paymentTypeId}
                onChange={handlePaymentTypeChange} />

            <ShippingMethodSelector
                shippingMethods={shippingMethods}
                selectedId={state.shippingMethodId}
                onChange={handleShippingMethodChange} />

            <textarea
                value={state.note}
                onChange={(event) => dispatch({type: ACTION_SET_ORDER_NOTE, payload: event.target.value})} />

            <button className='submit-order' onClick={submitOrder}>
                Submit order
            </button>
        </div>
    );
};

export default OrderPage;
