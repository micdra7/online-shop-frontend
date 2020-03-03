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
    producer: Producer;
    discounts: Discount[];
    subcategory: Subcategory;
    category: Category;
}

export interface Producer {
    id: number;
    name: string;
}

export interface Cart {
    userID: string;
    shippingMethodID: number;
    note: string;
    cartItems: CartItem[];
}

export interface CartItem {
    productID: number;
    quantity: number;
}

export interface Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
}

export interface Subcategory {
    id: number;
    categoryID: number;
    name: string;
    category: Category;
}

export interface User {
    username: string;
    password?: string;
    email?: string;
    name?: string;
    surname?: string;
}
