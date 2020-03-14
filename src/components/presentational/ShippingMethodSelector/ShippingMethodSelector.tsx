import React from 'react';
import './ShippingMethodSelector.scss';
import { ShippingMethod } from '../../../utils/Types';

export interface ShippingMethodSelectorProps {
    shippingMethods: ShippingMethod[];
    selectedId: number;
    onChange: (event?: any) => void;
}

const ShippingMethodSelector: React.FC<ShippingMethodSelectorProps> = ({
    shippingMethods,
    selectedId,
    onChange,
}) => (
    <div className='shipping-method-selector'>
        <label>Shipping methods</label>
        {shippingMethods.map((method) => (
            <>
                <input
                    key={method.name}
                    type='radio'
                    name='shipping-method'
                    checked={method.id === selectedId}
                    onChange={(event) => onChange(event)}
                    value={method.id}
                />

                {method.name}
            </>
        ))}
    </div>
);

export default ShippingMethodSelector;
