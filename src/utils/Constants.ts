import { Cart } from './Types';

export const SESSION_STORAGE_CART_KEY = 'online-shop-user-cart';
export const LOCAL_STORAGE_USERNAME_KEY = 'online-shop-username';
export const LOCAL_STORAGE_JWT_KEY = 'online-shop-jwt';
export const LOCAL_STORAGE_REFRESH_TOKEN_KEY = 'online-shop-refresh-token';

export const ACTION_SET_USERNAME = 'set-username';
export const ACTION_SET_PASSWORD = 'set-password';
export const ACTION_SET_EMAIL = 'set-email';
export const ACTION_SET_NAME = 'set-name';
export const ACTION_SET_SURNAME = 'set-surname';

export const initialCartState: Cart = {
    userID: '',
    shippingMethodID: 0,
    note: '',
    cartItems: []
};
