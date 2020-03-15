import React from 'react';
import FormControl from '../FormControl/FormControl';
import './AddressForm.scss';
import {
    ACTION_SET_ADDRESS_1,
    ACTION_SET_ADDRESS_2,
    ACTION_SET_ADDRESS_3,
} from '../../../utils/Constants';

export interface AddressFormProps {
    address1: string;
    address2: string;
    address3: string;
    dispatch: (action: { type: string; payload: any }) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
    address1,
    address2,
    address3,
    dispatch,
}) => (
    <section className='address-form'>
        <p>
            <FormControl
                label='Addres 1'
                name='address-1'
                type='text'
                value={address1}
                onChangeHandler={(event) =>
                    dispatch({
                        type: ACTION_SET_ADDRESS_1,
                        payload: event.target.value,
                    })
                }
            />
        </p>
        <p>
            <FormControl
                label='Addres 2'
                name='address-2'
                type='text'
                value={address2}
                onChangeHandler={(event) =>
                    dispatch({
                        type: ACTION_SET_ADDRESS_2,
                        payload: event.target.value,
                    })
                }
            />
        </p>
        <p>
            <FormControl
                label='Addres 3'
                name='address-3'
                type='text'
                value={address3}
                onChangeHandler={(event) =>
                    dispatch({
                        type: ACTION_SET_ADDRESS_3,
                        payload: event.target.value,
                    })
                }
            />
        </p>
    </section>
);

export default AddressForm;
