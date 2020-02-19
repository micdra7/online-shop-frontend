import axios from 'axios';

// TODO change that for sth loaded from .env file
export const currentLink: string = 'https://localhost:5001';

export interface Discount {
    id: number;
    productID: number;
    percentage: number;
    startTime: Date;
    endTime: Date;
}

export const getDiscounts = async (): Promise<Discount[]> => {

    try {
        const response = await axios.get(`${currentLink}/api/product/discounts`);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};
