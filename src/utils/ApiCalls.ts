import axios from 'axios';
import { Discount, Product } from './Types';

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
}