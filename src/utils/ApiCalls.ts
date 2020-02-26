import axios from 'axios';
import { Discount, Product, Category, Subcategory } from './Types';

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

export const getProducts = async (subcategoryId: number) => {

    try {
        const response = await axios.get(`${currentLink}/api/subcategory/${subcategoryId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
