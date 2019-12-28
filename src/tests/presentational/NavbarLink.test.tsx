import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';

import NavbarLink, { NavbarLinkProps } from '../../components/presentational/NavbarLink/NavbarLink';

describe('<NavbarLink />', () => {
    test('Should render properly', async () => {
        const { findByTestId } = renderNavbarLinkComponent();

        const navbarLink = await findByTestId('navbar-link');

        expect(navbarLink).toHaveTextContent('Home');
    });
});

const renderNavbarLinkComponent = (props?: NavbarLinkProps) => {
    const defaultProps: NavbarLinkProps = {
        href: '/',
        text: 'Home',
    };

    return render(
        <Router>
            <NavbarLink {...defaultProps} {...props} />
        </Router>
    );
};
