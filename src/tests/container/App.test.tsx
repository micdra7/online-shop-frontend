import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import App, { AppProps } from '../../components/container/App/App';

describe('<App />', () => {
    test('Should display a welcome message', async () => {
        const { findByTestId } = renderAppComponent();

        const appComponent = await findByTestId('appComponent');

        expect(appComponent).toHaveTextContent('hello');
    });
});

const renderAppComponent = (props?: AppProps) => {
    const defaultProps: AppProps = {
        message: 'hello',
    };

    return render(<App {...defaultProps} {...props} />);
};
