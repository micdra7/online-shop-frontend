import React, { useReducer } from 'react';
import './RegistrationForm.scss';
import { loginPageReducer } from '../../../utils/Reducers';
import { register } from '../../../utils/ApiCalls';
import {
        ACTION_SET_USERNAME,
        ACTION_SET_PASSWORD,
        ACTION_SET_SURNAME,
        ACTION_SET_EMAIL,
        ACTION_SET_NAME 
    } from '../../../utils/Constants';

const RegistrationForm: React.FC = () => {

    const initialState = {
        username: '',
        password: '',
        email: '',
        name: '',
        surname: ''
    };

    const [state, dispatch] = useReducer(loginPageReducer, initialState);

    const performRegistration = async () => {
        const response = await register({
            username: state.username,
            password: state.password,
            email: state.email,
            name: state.name,
            surname: state.surname
        });

        if (response === 200) {
            console.log('registartion successful');
        }
    };

    return (
        <section className='register'>
            <p>
                <label htmlFor='login-username'>Login</label>
                <input
                    type='text'
                    value={state.username}
                    onChange={(event) => dispatch({type: ACTION_SET_USERNAME, payload: event.target.value})}
                    name='register-username' />
            </p>
            <p>
                <label htmlFor='login-password'>Password</label>
                <input
                    type='password'
                    value={state.password}
                    onChange={(event) => dispatch({type: ACTION_SET_PASSWORD, payload: event.target.value})}
                    name='register-password' />
            </p>
            <p>
                <label htmlFor='register-email'>Email</label>
                <input
                    type='email'
                    value={state.email}
                    onChange={(event) => dispatch({type: ACTION_SET_EMAIL, payload: event.target.value})}
                    name='register-email' />
            </p>
            <p>
                <label htmlFor='register-name'>Name</label>
                <input
                    type='text'
                    value={state.name}
                    onChange={(event) => dispatch({type: ACTION_SET_NAME, payload: event.target.value})}
                    name='register-name' />
            </p>
            <p>
                <label htmlFor='register-surname'>Surname</label>
                <input
                    type='text'
                    value={state.surname}
                    onChange={(event) => dispatch({type: ACTION_SET_SURNAME, payload: event.target.value})}
                    name='register-surname' />
            </p>
            <button className='register' onClick={performRegistration}>
                Register
            </button>
        </section>
    );
};

export default RegistrationForm;
