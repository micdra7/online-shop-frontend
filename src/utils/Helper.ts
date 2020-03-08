import { LOCAL_STORAGE_USERNAME_KEY } from './Constants';

export const checkIfLoggedIn = (): boolean => {
    if (localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) !== '') {
        return true;
    }

    return false;
};
