import { localStorageUsernameKey } from './Constants';

export const checkIfLoggedIn = (): boolean => {
    if (localStorage.getItem(localStorageUsernameKey) !== '') {
        return true;
    }

    return false;
};
