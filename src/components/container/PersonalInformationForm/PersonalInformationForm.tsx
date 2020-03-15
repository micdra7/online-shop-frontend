import React, { useReducer, useEffect } from 'react';
import './PersonalInformationForm.scss';
import { accountPageReducer } from '../../../utils/Reducers';
import FormControl from '../../presentational/FormControl/FormControl';
import {
    ACTION_SET_NAME,
    LOCAL_STORAGE_USERNAME_KEY,
    ACTION_SET_SURNAME,
    ACTION_SET_ADDRESS_1,
    ACTION_SET_ADDRESS_2,
    ACTION_SET_ADDRESS_3,
    ACTION_SET_USERNAME,
    ACTION_SET_PASSWORD,
    ACTION_SET_EMAIL,
    ACTION_SET_PASSWORD_CONFIRM,
    LOCAL_STORAGE_JWT_KEY,
} from '../../../utils/Constants';
import { getUserDetails, updateUserDetails } from '../../../utils/ApiCalls';
import { UserDetail } from '../../../utils/Types';

const PersonalInformationForm: React.FC = () => {
    const initalState = {
        username: localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY),
        password: '',
        passwordConfirm: '',
        email: '',
        name: '',
        surname: '',
        address1: '',
        address2: '',
        address3: '',
    };

    const [state, dispatch] = useReducer(accountPageReducer, initalState);

    const updateUser = async () => {
        await updateUserDetails(
            [
                {
                    name: state.name,
                    surname: state.surname,
                    address1: state.address1,
                    address2: state.address2,
                    address3: state.address2,
                },
            ],
            {
                name: state.name,
                surname: state.name,
                username: localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY),
                password: state.password,
                passwordConfirm: state.passwordConfirm,
                email: state.email,
            }
        );
    };

    useEffect(() => {
        const fetchDetails = async () => {
            const response: UserDetail[] = await getUserDetails();

            dispatch({
                type: ACTION_SET_NAME,
                payload: response[0].name ?? '',
            });
            dispatch({
                type: ACTION_SET_SURNAME,
                payload: response[0].surname ?? '',
            });
            dispatch({
                type: ACTION_SET_ADDRESS_1,
                payload: response[0].address1 ?? '',
            });
            dispatch({
                type: ACTION_SET_ADDRESS_2,
                payload: response[0].address2 ?? '',
            });
            dispatch({
                type: ACTION_SET_ADDRESS_3,
                payload: response[0].address3 ?? '',
            });
            dispatch({
                type: ACTION_SET_EMAIL,
                payload: response[0].applicationUser.email ?? '',
            });
        };

        fetchDetails();
    }, []);

    return (
        <div className='personal-information-form'>
            <section className='account-details'>
                <FormControl
                    label='Password'
                    type='password'
                    name='account-password'
                    value={state.password}
                    onChangeHandler={(event: any) =>
                        dispatch({
                            type: ACTION_SET_PASSWORD,
                            payload: event.target.value,
                        })
                    }
                />

                <FormControl
                    label='Confirm password'
                    type='password'
                    name='account-password-confirm'
                    value={state.passwordConfirm}
                    onChangeHandler={(event: any) =>
                        dispatch({
                            type: ACTION_SET_PASSWORD_CONFIRM,
                            payload: event.target.value,
                        })
                    }
                />

                <FormControl
                    label='Email'
                    type='email'
                    name='account-email'
                    value={state.email}
                    onChangeHandler={(event: any) =>
                        dispatch({
                            type: ACTION_SET_EMAIL,
                            payload: event.target.value,
                        })
                    }
                />
            </section>

            <section className='personal-information'>
                <FormControl
                    label='Name'
                    type='text'
                    name='account-name'
                    value={state.name}
                    onChangeHandler={(event: any) =>
                        dispatch({
                            type: ACTION_SET_NAME,
                            payload: event.target.value,
                        })
                    }
                />

                <FormControl
                    label='Surname'
                    type='text'
                    name='account-surname'
                    value={state.surname}
                    onChangeHandler={(event: any) =>
                        dispatch({
                            type: ACTION_SET_SURNAME,
                            payload: event.target.value,
                        })
                    }
                />

                <FormControl
                    label='Address1'
                    type='text'
                    name='account-address1'
                    value={state.address1}
                    onChangeHandler={(event: any) =>
                        dispatch({
                            type: ACTION_SET_ADDRESS_1,
                            payload: event.target.value,
                        })
                    }
                />

                <FormControl
                    label='Address2'
                    type='text'
                    name='account-address2'
                    value={state.address2}
                    onChangeHandler={(event: any) =>
                        dispatch({
                            type: ACTION_SET_ADDRESS_2,
                            payload: event.target.value,
                        })
                    }
                />

                <FormControl
                    label='Address3'
                    type='text'
                    name='account-address3'
                    value={state.address3}
                    onChangeHandler={(event: any) =>
                        dispatch({
                            type: ACTION_SET_ADDRESS_3,
                            payload: event.target.value,
                        })
                    }
                />
            </section>

            <button className='update' onClick={updateUser}>
                Save
            </button>
        </div>
    );
};

export default PersonalInformationForm;
