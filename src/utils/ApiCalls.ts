import axios from 'axios';
import {
    Discount,
    Product,
    Category,
    Subcategory,
    User,
    Cart,
    UserDetail,
    ShippingMethod,
    PaymentType,
    Order,
} from './Types';
import {
    LOCAL_STORAGE_USERNAME_KEY,
    LOCAL_STORAGE_REFRESH_TOKEN_KEY,
    LOCAL_STORAGE_JWT_KEY,
} from './Constants';

// TODO change that for sth loaded from .env file
export const currentLink: string = 'https://localhost:5001';

axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_JWT_KEY)}`,
};

export const getDiscounts = async (): Promise<Discount[]> => {
    try {
        const response = await axios.get(
            `${currentLink}/api/product/discounts`
        );
        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return [];
    }
};

export const getLastPurchasedProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(`${currentLink}/api/order/last`);
        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return [];
    }
};

export const getCategories = async (): Promise<Category[]> => {
    try {
        const response = await axios.get(`${currentLink}/api/category`);
        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return [];
    }
};

export const getSubcategories = async (): Promise<Subcategory[]> => {
    try {
        const response = await axios.get(`${currentLink}/api/subcategory`);
        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return [];
    }
};

export const getSubcategoryAndProducts = async (subcategoryId: number) => {
    try {
        const response = await axios.get(
            `${currentLink}/api/subcategory/${subcategoryId}`
        );
        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return [];
    }
};

export const getProduct = async (productId: number): Promise<Product> => {
    try {
        const response = await axios.get(
            `${currentLink}/api/product/${productId}`
        );
        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const getSelectedProducts = async (
    arrayOfProductIds: number[]
): Promise<Product[]> => {
    try {
        const requestParams = arrayOfProductIds
            .map((id) => `ids=${id}&`)
            .toString()
            .replace(',', '');

        const response = await axios.get(
            `${currentLink}/api/product/selected?${requestParams}`
        );

        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const register = async (user: User) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.post(
            `${currentLink}/api/account/register`,
            {
                username: user.username,
                password: user.password,
                email: user.email,
                name: user.name,
                surname: user.surname,
            },
            options
        );

        return response.status;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const login = async (user: User): Promise<any> => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.post(
            `${currentLink}/api/account/login`,
            {
                username: user.username,
                password: user.password,
                email: user.email,
                name: user.name,
                surname: user.surname,
            },
            options
        );

        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const sendOrder = async (cart: Cart) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.post(
            `${currentLink}/api/order`,
            {
                ...cart,
            },
            options
        );

        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const saveShippingAddres = async (address: {
    address1: string;
    address2: string;
    address3: string;
}) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.post(
            `${currentLink}/api/account/update-address`,
            {
                ...address,
                username: localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY),
            },
            options
        );

        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const getShippingMethods = async (): Promise<ShippingMethod[]> => {
    try {
        const response = await axios.get(
            `${currentLink}/api/order/shipping-methods`
        );

        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const getPaymentTypes = async (): Promise<PaymentType[]> => {
    try {
        const response = await axios.get(
            `${currentLink}/api/order/payment-types`
        );

        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const getUserDetails = async (): Promise<UserDetail[]> => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.post(
            `${currentLink}/api/account/details`,
            {
                username: localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY),
            },
            options
        );

        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const updateUserDetails = async (details: UserDetail[], user: User) => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.post(
            `${currentLink}/api/account/update`,
            {
                user,
                address: {
                    address1: details[0].address1,
                    address2: details[0].address2,
                    address3: details[0].address3,
                },
            },
            options
        );

        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

export const getOrdersForUser = async (): Promise<Order[]> => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await axios.post(
            `${currentLink}/api/order/history`,
            {
                username: localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY),
            },
            options
        );

        return response.data;
    } catch (error) {
        checkIf401AndRefresh(error);
        return null;
    }
};

const checkIf401AndRefresh = async (error: any): Promise<any> => {
    if (error.response.status === 401) {
        refreshJWT();
    }
};

export const refreshJWT = async (): Promise<any> => {
    const username: string = localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY);
    const refreshToken: string = localStorage.getItem(
        LOCAL_STORAGE_REFRESH_TOKEN_KEY
    );

    if (username === '' || refreshToken === '') {
        localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, '');
        localStorage.setItem(LOCAL_STORAGE_JWT_KEY, '');
        localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, '');
        return;
    }

    try {
        const response = await axios.post(
            `${currentLink}/api/account/refresh`,
            {
                user: {
                    username,
                },
                refreshToken,
            }
        );

        localStorage.setItem(LOCAL_STORAGE_JWT_KEY, response.data.jwt);
        localStorage.setItem(
            LOCAL_STORAGE_REFRESH_TOKEN_KEY,
            response.data.refreshToken
        );
    } catch (error) {
        if (error.response.status === 400) {
            localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, '');
            localStorage.setItem(LOCAL_STORAGE_JWT_KEY, '');
            localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, '');
        }

        console.log(error);
        return null;
    }
};
