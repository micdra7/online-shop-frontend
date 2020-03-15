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
    username: string;
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
    passwordConfirm?: string;
}

export interface UserDetail {
    id?: number;
    applicationUserID?: string;
    name?: string;
    surname?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    applicationUser?: User;
}

export interface PaymentType {
    id: number;
    name: string;
}

export interface Order {
    id: number;
    applicationUserId: string;
    shippingMethodId: string;
    dateAndTime: Date;
    note: string;
    shippingMethodPrice: number;
    applicationUser: User;
    shippingMethod: ShippingMethod;
    details: OrderDetail[];
    invoices: Invoice[];
}

export interface ShippingMethod {
    id: number;
    name: string;
    price: number;
}

export interface OrderDetail {
    id: number;
    orderId: number;
    productId: number;
    unitPrice: number;
    quantity: number;
    order: Order;
    product: Product;
}

export interface Invoice {
    id: number;
    applicationUserId: string;
    orderId: number;
    totalValue: number;
    dateIssued: Date;
    applicationUser: User;
    order: Order;
    details: InvoiceDetail[];
}

export interface InvoiceDetail {
    id: number;
    invoiceId: number;
    productId: number;
    itemQuantity: number;
    itemPrice: number;
    invoice: Invoice;
    product: Product;
}
