export interface Discount {
    id: number;
    productID: number;
    percentage: number;
    startTime: Date;
    endTime: Date;
}

export interface Product {
    id: number;
    producerID: number;
    categoryID: number;
    subcategoryID: number;
    name: string;
    price: number;
    availableQuantity: number;
}
