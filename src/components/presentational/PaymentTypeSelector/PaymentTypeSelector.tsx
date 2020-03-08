import React from 'react';
import './PaymentTypeSelector.scss';
import { PaymentType } from '../../../utils/Types';

export interface PaymentTypeSelectorProps {
    paymentTypes: PaymentType[];
    selectedId: number;
    onChange: (event?: any) => void;
}

const PaymentTypeSelector: React.FC<PaymentTypeSelectorProps> = ({ paymentTypes, selectedId, onChange }) => (
    <div className='payment-selector'>
        <label>Payment types</label>
        {paymentTypes.map((pType) => (
            <>
                <input
                    key={pType.name}
                    type='radio'
                    name='payment-type'
                    checked={pType.id === selectedId}
                    onChange={(event) => onChange(event)}
                    value={pType.id} />

                {pType.name}
            </>
        ))}
    </div>
);

export default PaymentTypeSelector;
