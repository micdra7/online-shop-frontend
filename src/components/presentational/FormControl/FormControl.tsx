import React from 'react';
import './FormControl.scss';

export interface FormControlProps {
    label: string;
    type: string;
    value: string;
    name: string;
    onChangeHandler: (event?: any) => void;
}

const FormControl: React.FC<FormControlProps> = ({ label, type, value, name, onChangeHandler }) => (
    <>
        <label htmlFor={name}>
            {label}
        </label>
        <input
            type={type}
            value={value}
            onChange={(event) => onChangeHandler(event)}
            name={name} />
    </>
);

export default FormControl;
