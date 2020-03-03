import { Cart } from './Types';

export const sessionStorageCartKey = 'online-shop-user-cart';

export const localStorageUsernameKey = 'online-shop-username';

export const localStorageJWTKey = 'online-shop-jwt';

export const localStorageRefreshTokenKey = 'online-shop-refresh-token';

export const initialCartState: Cart = {
    userID: '',
    shippingMethodID: 0,
    note: '',
    cartItems: []
};
