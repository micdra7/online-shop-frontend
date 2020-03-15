import React from 'react';
import './PaymentTypeSelector.scss';
import { PaymentType } from '../../../utils/Types';
import FormControl from '../FormControl/FormControl';

export interface PaymentTypeSelectorProps {
    paymentTypes: PaymentType[];
    selectedId: number;
    onChange: (event?: any) => void;
}

const PaymentTypeSelector: React.FC<PaymentTypeSelectorProps> = ({
    paymentTypes,
    selectedId,
    onChange,
}) => (
    <div className='payment-selector'>
        <label>Payment types</label>
        {paymentTypes.map((pType) => (
            <FormControl
                key={pType.name}
                label={pType.name}
                type='radio'
                name='payment-type'
                onChangeHandler={(event: any) => onChange(event)}
                value={pType.id.toString()}
            />
        ))}
    </div>
);

export default PaymentTypeSelector;
