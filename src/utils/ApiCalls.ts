import axios from 'axios';
import { Discount, Product, Category, Subcategory, User } from './Types';
import ProductElement from '../components/presentational/ProductElement/ProductElement';

// TODO change that for sth loaded from .env file
export const currentLink: string = 'https://localhost:5001';

export const getDiscounts = async (): Promise<Discount[]> => {

    try {
        const response = await axios.get(`${currentLink}/api/product/discounts`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getLastPurchasedProducts = async (): Promise<Product[]> => {

    try {
        const response = await axios.get(`${currentLink}/api/order/last`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getCategories = async (): Promise<Category[]> => {

    try {
        const response = await axios.get(`${currentLink}/api/category`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getSubcategories = async (): Promise<Subcategory[]> => {

    try {
        const response = await axios.get(`${currentLink}/api/subcategory`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getSubcategoryAndProducts = async (subcategoryId: number) => {

    try {
        const response = await axios.get(`${currentLink}/api/subcategory/${subcategoryId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getProduct = async (productId: number): Promise<Product> => {

    try {
        const response = await axios.get(`${currentLink}/api/product/${productId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getSelectedProducts = async (arrayOfProductIds: number[]): Promise<Product[]> => {

    try {
        const requestParams = arrayOfProductIds.map((id) => `ids=${id}&`).toString().replace(',', '');

        const response = await axios.get(`${currentLink}/api/product/selected?${requestParams}`);

        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const register = async (user: User) => {

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.post(`${currentLink}/api/account/register`, {
            username: user.username,
            password: user.password,
            email: user.email,
            name: user.name,
            surname: user.surname
        }, options);

        return response.status;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const login = async (user: User): Promise<string[]> => {

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.post(`${currentLink}/api/account/login`, {
            username: user.username,
            password: user.password,
            email: user.email,
            name: user.name,
            surname: user.surname
        }, options);

        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
