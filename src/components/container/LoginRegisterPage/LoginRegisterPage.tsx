import React from 'react';
import './LoginRegisterPage.scss';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const LoginRegisterPage: React.FC = () => (
    <div className='login-register-page'>
        <LoginForm />

        <RegistrationForm />
    </div>
);

export default LoginRegisterPage;
