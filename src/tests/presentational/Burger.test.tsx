import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import Burger, {
    BurgerProps,
} from '../../components/presentational/Burger/Burger';

describe('<Burger />', () => {
    test('Should render properly', async () => {
        const { findByTestId } = renderBurgerComponent();

        const burger = await findByTestId('burger');

        expect(burger).toHaveClass('burger');
    });

    test('Should respond to prop changes', async () => {
        const { findByTestId } = renderBurgerComponent({
            active: true,
            handleClick: jest.fn(),
        });

        const burger = await findByTestId('burger');

        expect(burger).toHaveClass('burger active');
    });
});

const renderBurgerComponent = (props?: BurgerProps) => {
    const defaultProps: BurgerProps = {
        active: false,
        handleClick: jest.fn(),
    };

    return render(<Burger {...defaultProps} {...props} />);
};
