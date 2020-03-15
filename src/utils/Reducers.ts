import {
    ACTION_SET_USERNAME,
    ACTION_SET_PASSWORD,
    ACTION_SET_EMAIL,
    ACTION_SET_NAME,
    ACTION_SET_SURNAME,
    ACTION_SET_SHIPPING_METHOD_ID,
    ACTION_SET_ORDER_NOTE,
    ACTION_SET_ADDRESS_1,
    ACTION_SET_ADDRESS_2,
    ACTION_SET_ADDRESS_3,
    ACTION_SET_PAYMENT_TYPE_ID,
    ACTION_SET_PASSWORD_CONFIRM,
} from './Constants';

export const loginPageReducer = (
    state: any,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case ACTION_SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case ACTION_SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case ACTION_SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case ACTION_SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case ACTION_SET_SURNAME:
            return {
                ...state,
                surname: action.payload,
            };
        default:
            return state;
    }
};

export const orderPageReducer = (
    state: any,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case ACTION_SET_SHIPPING_METHOD_ID:
            return {
                ...state,
                shippingMethodId: Number(action.payload),
            };
        case ACTION_SET_PAYMENT_TYPE_ID:
            return {
                ...state,
                paymentTypeId: Number(action.payload),
            };
        case ACTION_SET_ORDER_NOTE:
            return {
                ...state,
                note: action.payload,
            };
        case ACTION_SET_ADDRESS_1:
            return {
                ...state,
                address1: action.payload,
            };
        case ACTION_SET_ADDRESS_2:
            return {
                ...state,
                address2: action.payload,
            };
        case ACTION_SET_ADDRESS_3:
            return {
                ...state,
                address3: action.payload,
            };
        default:
            return state;
    }
};

export const accountPageReducer = (
    state: any,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case ACTION_SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case ACTION_SET_SURNAME:
            return {
                ...state,
                surname: action.payload,
            };
        case ACTION_SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        case ACTION_SET_PASSWORD_CONFIRM:
            return {
                ...state,
                passwordConfirm: action.payload,
            };
        case ACTION_SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case ACTION_SET_ADDRESS_1:
            return {
                ...state,
                address1: action.payload,
            };
        case ACTION_SET_ADDRESS_2:
            return {
                ...state,
                address2: action.payload,
            };
        case ACTION_SET_ADDRESS_3:
            return {
                ...state,
                address3: action.payload,
            };
        default:
            return state;
    }
};
