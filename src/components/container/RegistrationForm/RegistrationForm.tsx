import React, { useReducer } from 'react';
import './RegistrationForm.scss';
import { loginPageReducer } from '../../../utils/Reducers';
import { register } from '../../../utils/ApiCalls';
import {
    ACTION_SET_USERNAME,
    ACTION_SET_PASSWORD,
    ACTION_SET_SURNAME,
    ACTION_SET_EMAIL,
    ACTION_SET_NAME,
} from '../../../utils/Constants';
import FormControl from '../../presentational/FormControl/FormControl';

const RegistrationForm: React.FC = () => {
    const initialState = {
        username: '',
        password: '',
        email: '',
        name: '',
        surname: '',
    };

    const [state, dispatch] = useReducer(loginPageReducer, initialState);

    const performRegistration = async () => {
        const response = await register({
            username: state.username,
            password: state.password,
            email: state.email,
            name: state.name,
            surname: state.surname,
        });

        if (response === 200) {
            console.log('registartion successful');
        }
    };

    return (
        <section className='register'>
            <p>
                <FormControl
                    label='Login'
                    name='register-username'
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
                    name='register-password'
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
            <p>
                <FormControl
                    label='Email'
                    name='register-email'
                    type='email'
                    value={state.email}
                    onChangeHandler={(event) =>
                        dispatch({
                            type: ACTION_SET_EMAIL,
                            payload: event.target.value,
                        })
                    }
                />
            </p>
            <p>
                <FormControl
                    label='Name'
                    name='register-name'
                    type='text'
                    value={state.name}
                    onChangeHandler={(event) =>
                        dispatch({
                            type: ACTION_SET_NAME,
                            payload: event.target.value,
                        })
                    }
                />
            </p>
            <p>
                <FormControl
                    label='Surname'
                    name='register-surname'
                    type='text'
                    value={state.surname}
                    onChangeHandler={(event) =>
                        dispatch({
                            type: ACTION_SET_SURNAME,
                            payload: event.target.value,
                        })
                    }
                />
            </p>
            <button className='register' onClick={performRegistration}>
                Register
            </button>
        </section>
    );
};

export default RegistrationForm;
