import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import Navbar, { NavbarProps } from '../../components/container/Navbar/Navbar';

describe('<Navbar />', () => {
    test('Should render properly', async () => {
        const { findByTestId } = renderNavbarComponent();

        const navbar = await findByTestId('navbar');

        expect(navbar).toHaveTextContent('HomeProducts');
    });
});

const renderNavbarComponent = (props?: NavbarProps) => {
    const defaultProps: NavbarProps = {
       links: [
           {href: '/', text: 'Home'},
           {href: '/products', text: 'Products'}
        ],
       active: false,
       handleClick: jest.fn
    };

    return render(
        <Router>
            <Navbar {...defaultProps} {...props} />
        </Router>
    );
};
