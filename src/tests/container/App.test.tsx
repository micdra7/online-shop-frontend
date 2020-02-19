import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import App from '../../components/container/App/App';

describe('<App />', () => {
    test('Should display a welcome message', async () => {
        const { findByTestId } = renderAppComponent();

        const appComponent = await findByTestId('appComponent');

        expect(appComponent).toHaveTextContent('hello');
    });
});

const renderAppComponent = () => {
    return render(<App />);
};
