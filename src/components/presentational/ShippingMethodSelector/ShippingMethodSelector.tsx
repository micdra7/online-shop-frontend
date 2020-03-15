import React from 'react';
import './ShippingMethodSelector.scss';
import { ShippingMethod } from '../../../utils/Types';
import FormControl from '../../presentational/FormControl/FormControl';

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
            <FormControl
                key={method.name}
                label={method.name}
                type='radio'
                name='shipping-method'
                onChangeHandler={(event: any) => onChange(event)}
                value={method.id.toString()}
            />
        ))}
    </div>
);

export default ShippingMethodSelector;
