import { Cart } from './Types';

export const sessionStorageCartKey = 'online-shop-user-cart';

export const initialCartState: Cart = {
    userID: '',
    shippingMethodID: 0,
    note: '',
    cartItems: []
};
