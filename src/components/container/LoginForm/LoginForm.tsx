import React, { useReducer } from 'react';
import './LoginForm.scss';
import {
    ACTION_SET_USERNAME,
    ACTION_SET_PASSWORD,
    LOCAL_STORAGE_JWT_KEY,
    LOCAL_STORAGE_REFRESH_TOKEN_KEY,
    LOCAL_STORAGE_USERNAME_KEY,
} from '../../../utils/Constants';
import { loginPageReducer } from '../../../utils/Reducers';
import { login } from '../../../utils/ApiCalls';
import FormControl from '../../presentational/FormControl/FormControl';

const LoginForm: React.FC = () => {
    const initialState = {
        username: '',
        password: '',
    };

    const [state, dispatch] = useReducer(loginPageReducer, initialState);

    const performLogin = async () => {
        const response = await login({
            username: state.username,
            password: state.password,
        });

        if (response !== null) {
            localStorage.setItem(LOCAL_STORAGE_JWT_KEY, response.jwt);
            localStorage.setItem(
                LOCAL_STORAGE_REFRESH_TOKEN_KEY,
                response.refreshToken
            );
            localStorage.setItem(LOCAL_STORAGE_USERNAME_KEY, state.username);
        }
    };

    return (
        <section className='login'>
            <p>
                <FormControl
                    label='Login'
                    name='login-username'
                    type='text'
                    value={state.username}
                    onChangeHandler={(event) =>
                        dispatch({
                            type: ACTION_SET_USERNAME,
                            payload: event.target.value,
                        })
                    }
                />
            </p>
            <p>
                <FormControl
                    label='Password'
                    name='login-password'
                    type='password'
                    value={state.password}
                    onChangeHandler={(event) =>
                        dispatch({
                            type: ACTION_SET_PASSWORD,
                            payload: event.target.value,
                        })
                    }
                />
            </p>
            <button className='login' onClick={performLogin}>
                Login
            </button>
        </section>
    );
};

export default LoginForm;
