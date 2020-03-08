import React from 'react';
import { checkIfLoggedIn } from '../../../utils/Helper';
import { Route, Redirect } from 'react-router-dom';

export interface PrivateRouteProps {
    path: string;
    exact?: boolean;
    children?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => (
    checkIfLoggedIn() ?
    <Route {...props} /> :
    <Redirect to='/login' />
);

export default PrivateRoute;
