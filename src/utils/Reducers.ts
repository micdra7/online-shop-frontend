import { ACTION_SET_USERNAME, ACTION_SET_PASSWORD, ACTION_SET_EMAIL, ACTION_SET_NAME, ACTION_SET_SURNAME } from './Constants';

export const loginPageReducer = (state: any, action: {type: string, payload: any}) => {
    switch (action.type) {
        case ACTION_SET_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case ACTION_SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case ACTION_SET_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case ACTION_SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case ACTION_SET_SURNAME:
            return {
                ...state,
                surname: action.payload
            };
        default:
            return state;
    }
};
